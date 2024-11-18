const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// session 옵션 객체
const sessionConfig = {
  // secure: 값을 true로 하면 https에서만 세션을 주고 받음
  // secret: 안전하게 쿠키를 전송하기 위한 쿠키 서명 값 (세션을 발급할 때 사용되는 키)
  // resave: 세션에 수정사항이 생기지 않더라도, 매 요청마다 세션을 다시 저장할 것인지,
  //         세션을 항상 저장할 것인지 지정하는 값 (false 권장)
  // saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
  // httpOnly: 웹 서버를 통해서만 쿠키에 접근 가능
  // maxAge: 쿠키의 수명, 단위는 밀리초
  // => cookie 객체에 넣어서 정의

  secret: "mySessionSecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 1000, // 60초
  },
};

app.use(session(sessionConfig));

app.get("/", (req, res) => {
  res.render("session");
});

// 설정
app.get("/set", (req, res) => {
  // req.session.키 = 값
  req.session.name = "홍길동";
  res.send("set session!");
});

// 확인
app.get("/get", (req, res) => {
  // req.session.키 => 값 출력
  console.log(req.session.name);
  console.log(req.sessionID); // 현재 세션 아이디
  console.log(req.session);
  res.send({ id: req.sessionID, name: req.session.name });
});

// 삭제
app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.send("fail");
    }
    res.redirect("/get");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
