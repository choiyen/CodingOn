const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session 옵션 객체
const sessionConfig = {
  secret: "mySessionSecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 1000, // 60초
  },
};

app.use(session(sessionConfig));

// 유저 정보
const userInfo = { id: "banana", pw: "1234" };

app.get("/", (req, res) => {
  // req.session.user 값이 있는지 검사를 해서 isLogin 변수로 로그인 여부
  const user = req.session.user; // "banana"
  console.log("user > ", user);

  if (user !== undefined) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { id, pw } = req.body;
  if (id === userInfo.id && pw === userInfo.pw) {
    // 로그인 성공 시 세션 생성
    req.session.user = id;
    res.redirect("/");
  } else {
    res.send("로그인 실패!");
  }
});

app.get("/logout", (req, res) => {
  const user = req.session.user;

  if (user !== undefined) {
    req.session.destroy((err) => {
      if (err) res.send("로그인 실패");
      else res.redirect("/");
    });
  } else {
    // 유저가 브라우저에 /logout로 접근 (로그인X)
    res.send("잘못된 접근입니다");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
