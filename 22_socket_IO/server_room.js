const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app); // express app으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결
const PORT = 8000;

// 사용자 닉네임 모음 객체
const nickObjs = {}; // {socket.id: nick1, socket.id: nick2..}
// 채팅방 정보 저장 배열
const roomList = [];

function getUsersInRoom(room) {
  // 사용자 정보를 저장하는 배열
  const users = [];
  const clients = io.sockets.adapter.rooms.get(room);
  //지정된 방에 클라이언트(Socket_id) 목록을 가져옴
  console.log(`${room} 채팅방의 클라이언트 목록 :: ${clients}`);
  if (clients) {
    for (const socketID of clients) {
      const socket = io.sockets.sockets.get(socketID);
      //특정 소캣 ID에 해당하는 클라이언트 소캣 정보 가져오기
      const nickname = socket.user || "알수없음";
      console.log(socketID);
      const info = { nickname, key: socketID };
      users.push(info);
    }
  }

  return users;
}

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("room");
});

io.on("connection", (socket) => {
  console.log("서버 연결 완료 :: ", socket.id);

  //클라이언트 연결 시 채팅방 목록을 표시
  io.emit("updateRoom", roomList);
  // 채팅방 만들기
  socket.on("create", ({ roomName, nickname }, cb) => {
    // join(방이름): 해당 방이름이 없다면 생성, 있다면 입장
    // socket.rooms 에 socket.id 값과 방 이름 확인 가능
    socket.join(roomName);

    // 채팅방에 입장한 사용자에게 notice 이벤트 발생
    socket.to(roomName).emit("notice", `${nickname} 님이 입장하였습니다`);

    //socket 정보에 닉네임 추가
    socket.user = nickname; //하나의 객체 형태라 key와 value 추가 가능.

    // 채팅방 목록 갱신
    if (!roomList.includes(roomName)) {
      roomList.push(roomName);
      io.emit("updateRoom", roomList);
    }

    //채팅방에 있는 모든 유저를 조회해서 전송.
    const usersInRoom = getUsersInRoom(roomName);
    io.to(roomName).emit("userList", usersInRoom);
    //해당 방에 있는 모든 user한테 nickname과 socketID를 동시에 보냄.
    cb();
  });

  socket.on("send", ({ dm, nick, msg, room }) => {
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
      io.to(room).emit("showMessage", { nick, msg });
    } else {
      const data = {
        nick,
        msg: msg,
        dm: "{DM}",
      };
      io.to(dm).emit("showMessage", data);
      socket.emit("showMessage", data); //내 화면에 보여주는 메세지
    }
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
