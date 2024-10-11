const http = require("http");
// node 서버에서 제공해주는 것.

//fs  모듈 사용(file system)
const fs = require("fs");

const server = http.createServer(function (req, res) {
  //req : request 객체(클라이언트에서 서버로 들어온 요청)
  //res : response 객체(서버에서 클라이언트로 보내는 요청)
  //응답 헤드,
  // res.writeHead(200); //응답 헤드
  // res.write("<h1>Hello, node js</h1>"); //응답 본문
  // res.end("<p>My first node server</p>");
  // localhost:8000 접속 시 일어남.

  //예외 처리!! -> try-catch문

  try {
    const data = fs.readFileSync("./inde.html");
    res.writeHead(200, { "content-type": "text/html; charset=UTF-8" });
    res.write(data);
    res.end();
  } catch (error) {
    //실습 : 404.html 파일 만들어서 해당 html 파일 응답으로 보내기
    console.log(error);
    const data = fs.readFileSync("./404.html");
    res.writeHead(200, { "content-type": "text/html; charset=UTF-8" });
    res.write(data);
    res.end();
  }
});
//localhost = 127.0.0.1

const PORT = 8000; //생략하면 80번으로 들어감.

//request 이벤트 : 클라이언트 요청
server.on("request", function (res, req) {
  console.log("request 이벤트 발생 ", req);
});

//cpnnection 이벤트
server.on("connection", function (res, req) {
  console.log("connection 이벤트 발생");
});

server.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});
//하나의 통로라고 보면 됨.

//5초 후에 서버 종료
// setTimeout(function () {
//   console.log("5초가 지나서 서버 종료");
//   server.close();
// }, 5000);
