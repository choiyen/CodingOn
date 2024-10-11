const http = require("http");
// node 서버에서 제공해주는 것.
const server = http.createServer();

const PORT = 8080;

server.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});
