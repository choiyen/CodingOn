const User = require("../model/User");

const get_signup = (req, res) => {
  res.render("signup");
};

const get_signin = (req, res) => {
  res.render("signin");
};

const get_profile = async (req, res) => {
  console.log("get_profile", req.params);

  const result = await User.get_profile(req.params.id);
  console.log("result", result);

  if (result.length > 0)
    res.render("profile", { data: result[0], message: "조회완료" });
  else {
    res.render("profile", { data: null, message: "존재하는 회원 없음" });
  }
};

const post_signup = async (req, res) => {
  console.log("post_signup", req.body);

  const result = await User.signup(req.body);
  res.json({ result: true });
};

const post_signin = async (req, res) => {
  console.log("post_signin", req.body);

  const result = await User.signin(req.body);
  console.log("result", result);

  if (result.length > 0) res.json({ isLogin: true, id: result[0].id });
  else res.json({ isLogin: false, id: null });
};

const edit_profile = async (req, res) => {
  console.log("edit_profile", req.body);

  const result = await User.edit_profile(req.body);
  res.send("회원 정보 수정 성공");
};

const delete_profile = async (req, res) => {
  console.log("delete_profile", req.body);
  const result = await User.delete_profile(req.body.id);
  res.send("회원 탈퇴 성공");
};

module.exports = {
  get_signup,
  get_signin,
  get_profile,
  post_signup,
  post_signin,
  edit_profile,
  delete_profile,
};
