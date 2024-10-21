const loginfun = require("../model/login");

// GET /메인페이지 접속
const main = (req, res) => {
  res.render("index");
};

const profile = (req, res) => {
  console.log(res.query);
  res.render("profile", { id: req.query.id, name: req.query.name });
};

const profile1 = (req, res) => {
  console.log(res.body);
  console.log("dddd");
  res.render("profile", { id: req.body.id, name: req.body.name });
};

//GET/ 회원가입 페이지 접속
const login = (req, res) => {
  res.render("insert_login");
};

//POST//회원가입 수행
const insertlogin = async (req, res) => {
  console.log(req.body);
  console.log(req.body.name);
  const { name, id, pw } = req.body;
  const data = await loginfun.postlogin(id, name, pw); //시간이 걸려 받아온 DB를 data 변수에 넣음.
  console.log(data);
  res.json({ id: data.id, name, pw });
};

const deletelogin = async (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  const data = await loginfun.delete_login(id); //시간이 걸려 받아온 DB를 data 변수에 넣음.
  console.log(data);
  res.json({ result: true });
};

const patchlogin = async (req, res) => {
  console.log(req.body);
  const { name, pw, id } = req.body;
  console.log(name);
  const data = await loginfun.patch_login(name, pw, id);
  res.json({ result: true });
};

const loginsuess = async (req, res) => {
  const { id } = req.body;
  const data = await loginfun.selectlogin(id);
  //console.log(data);
  if (data.length == 0) {
    res.json({ isSuccess: false }); // 유저가 존재하지 않은 상황은 에러가 아님.
  } else {
    res.json({ userInfo: data, isSuccess: true });
  }
};

const cancle = async (req, res) => {
  const { id } = req.body;
  const data = await loginfun.cancle(id);
  console.log(data[0].id);
  res.json({ userInfo: data[0] });
};

const duplication = async (req, res) => {
  const { id } = req.body;
  const data = await loginfun.duplication(id);
  if (data.length !== 0) {
    res.json({ userInfo: data, isSuccess: true });
  } else {
    res.json({ isSuccess: false });
  }
};

module.exports = {
  main,
  login,
  insertlogin,
  loginsuess,
  profile,
  deletelogin,
  patchlogin,
  duplication,
  profile1,
  cancle,
};
