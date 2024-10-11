const http = require("http");
// node 서버에서 제공해주는 것.
const server = http.createServer(function (req, res) {
  //req : request 객체(클라이언트에서 서버로 들어온 요청)
  //res : response 객체(서버에서 클라이언트로 보내는 요청)
  //응답 헤드,
  res.writeHead(200); //응답 헤드
  res.write("<h1>Hello, node js</h1>"); //응답 본문
  res.end("<p>My first node server</p>");
});

const PORT = 8000;

server.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});
//하나의 통로라고 보면 됨.
