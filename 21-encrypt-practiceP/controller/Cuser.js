// TODO: User 모델 모듈 불러오기
const User = require("../models/index").User;
// TODO: bcrypt 패키지 불러오기

const { bcryptPassword, compareFunc } = require("../utils/encrypt");

exports.index = (req, res) => {
  // index.ejs 렌더 (data 키로 session 객체의 userInfo 전달)
  res.render("index", { data: req.session.userInfo });
};

exports.getRegister = (req, res) => {
  // register.ejs 렌더
  res.render("register");
};

exports.getLogin = (req, res) => {
  // login.ejs 렌더
  res.render("login");
};

exports.getUsers = async (req, res) => {
  // 세션에 userInfo 데이터가 있다면; 전체 유저를 찾음
  // 세션에 userInfo 데이터가 없다면; /login 경로로 리다이렉트
  // -> 즉, 해당 요청은 로그인한 사람만 전체 유저를 조회할 수 있음
  if (req.session.userInfo) {
    const users = await User.findAll();
    res.render("users", { name: req.session.userInfo.name, users });
  } else {
    res.redirect("/login");
  }
};

exports.getProfile = async (req, res) => {
  // 1. userInfo 세션에 저장된 id를 이용해 현재 로그인한 유저의 id 값으로 특정 유저 정보 하나를 조회
  // 2. profile.ejs 랜더 + data 키로 특정 유저를 찾은 결과를 넘김

  const user = await User.findOne({
    where: { id: req.session.userInfo.id },
  });
  res.render("profile", { data: user });
};

exports.postRegister = async (req, res) => {
  // 회원가입 요청시 비밀번호는 암호화한 값으로 DB에 추가
  // 응답은 {result: true}

  try {
    const { pw, name, userid } = req.body;
    const hash = bcryptPassword(pw);

    await User.create({ userid, name, pw: hash });
    res.json({ result: true });
  } catch (error) {
    console.error(error);
    res.send("회원가입 실패");
  }
};

exports.postLogin = async (req, res) => {
  try {
    // Step1. 아이디를 찾아서 사용자 존재 유무 체크
    const { userid, pw } = req.body;
    const user = await User.findOne({
      where: { userid },
    });
    // Step2. 입력된 비밀번호 암호화하여 기존 데이터와 비교
    if (user) {
      const result = compareFunc(pw, user.pw);

      if (result) {
        // 2-1-1. 비밀번호 일치;
        req.session.userInfo = { name: user.name, id: user.id };
        res.json({ result: true, data: user });
      } else {
        res.json({ result: false, message: "비밀번호가 틀렸습니다." });
      }
    } else {
      res.json({ result: false, message: "존재하는 사용자가 없습니다" });
    }
  } catch (error) {
    console.error(error);
    res.send("Internal Server Error");
  }
};

exports.patchProfile = async (req, res) => {
  // 사용자가 요청한 데이터를 변경
  // 응답 데이터; { result: true }
  try {
    const { name, pw, id } = req.body;
    await User.update({ name, pw }, { where: { id } });
    res.json({ result: true });
  } catch (error) {
    console.error(error);
    res.send("Internal Sever Error");
  }
};

exports.deleteUser = async (req, res) => {
  // 1. 유저 삭제
  // 2. 세션 삭제
  try {
    const { id } = req.body;

    await User.destroy({
      where: { id },
    });
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
      }
      res.json({ result: true });
    });
  } catch (error) {
    console.error(error);
    res.send("Internal Sever Error");
  }
};
