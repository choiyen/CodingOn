const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const exp = require("constants");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 8000;

//사용자 닉네임을 모아둘 객체를 만든다.
const nickObjs = { hello: "안녕", apple: "사과" }; //sockt.id : nick1, sockt.id : nick2

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("chat");
});
app.get("/chat", (req, res) => {
  res.render("chat_par");
});

io.on("connection", (socket) => {
  console.log("서버 연결 완료::", socket.id);

  //[실습 1]
  socket.on("hello", (data) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit("helloKr", { who: "hello", msg: "안녕!" });
  });
  socket.on("Study", (data) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit("StudyKr", { who: "Study", msg: "공부합시다!" });
  });
  socket.on("Bye", (data) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit("ByeKr", { who: "Bye", msg: "안녕가세요!" });
  });

  //[실습3] 채팅창 입력 문구
  //io.emit("notice", `${socket.id} 님이 입장하셨습니다.`);
  // [실습3-2] 채팅창 입장 문구 socket.id -> nickname
  socket.on("setNick", (nickname) => {
    // 프론트에서 입력한 닉네임이 nickObjs에 존재하는지 검사
    // 이미 존재; error 이벤트 + '이미 존재하는 닉네임 입니다' => 클라이언트; error 이벤트 받고, alert 띄워줌
    // 새 닉네임; notice 이벤트

    // [퀴즈] 존재하는 닉네임인지 검사, 후 처리
    if (Object.values(nickObjs).indexOf(nickname) != -1) {
      // 이미 존재
      socket.emit("error", "이미 존재하는 닉네임입니다");
    } else {
      nickObjs[socket.id] = nickname;
      io.emit("notice", `${nickname} 님이 입장하셨습니다`);
      socket.emit("entrySuccess", nickname);
      io.emit("updateNicks", nickObjs);
    }
  });

  socket.on("send", ({ dm, myNick, msg }) => {
    //dm == all이면 전체 발송
    //그외는 DM 발송
    // if (dm == "all") {
    //   console.log(`전체에게 ${msg}를 전송하였습니다.`);
    //   io.emit("messageAll", msg);
    // } else {
    //   console.log(`${dm}에게 ${msg}를 전송하였습니다.`);
    //   io.to(dm).emit("message", msg);
    // }
    if (dm == "all") {
      io.emit("showMessage", { nick: myNick, msg });
    } else {
      const data = {
        nick: myNick,
        msg: msg,
        dm: "{DM}",
      };
      io.to(dm).emit("showMessage", data);
      socket.emit("showMessage", data); //내 화면에 보여주는 메세지
    }
  });
  socket.on("disconnect", () => {
    io.emit("notice", `${nickObjs[socket.id]} 님이 퇴장하였습니다.`);
    delete nickObjs[socket.id];
    io.emit("updateNicks", nickObjs);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
