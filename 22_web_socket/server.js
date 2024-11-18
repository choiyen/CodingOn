const ws = require("ws");
const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

const server = app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});

//express 서버와 웹 소캣 서버를 연결
const wsServer = new ws.Server({
  server: server,
});

const sockets = []; //클라이언트들을 저장할 배열

wsServer.on("connection", (socket) => {
  console.log("{클라이언트랑 연결 완료}");

  sockets.push(socket); //접속한 클라이언트 객체 추가

  // 클라이언트의 메세지를 수신함
  socket.on("message", (message) => {
    console.log(`클라이언트로 부터 받은 메세지 :: ${message}`);

    //웹 소캣 서버에 접속한 모든 클라이언트(브라우저 tab)
    //= 브로드캐스팅 (여러 컴퓨터한테 데이터 전송)
    sockets.forEach((socket) => {
      socket.send(`${message}`);
    });
  });

  socket.on("error", (error) => {
    console.log("에러 발생!!");
  });

  socket.on("close", () => {
    console.log("[클라이언트 연결 종료]");
  });
});
