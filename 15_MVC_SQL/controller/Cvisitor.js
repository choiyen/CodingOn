const Visitor = require("../model/Visitor");

// GET /
const main = (req, res) => {
  res.render("index");
};

// GET /visitors
const get_visitors = async (req, res) => {
  // 모델에서 데이터 받아오기

  // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 응답
  // 비동기 처리가 필요하다
  const data = await Visitor.getVisitors(); // [{}, {}]
  console.log(data);
  res.render("visitor", { data });
};

// POST /visitor
const post_visitor = async (req, res) => {
  console.log(req.body);
  const { name, comment } = req.body;

  const data = await Visitor.postVisitor(name, comment); //시간이 걸려 받아온 DB를 data 변수에 넣음.
  console.log(data);
  res.json({ id: data.insertId, name, comment });
};

//GET .visitor or .visitor/id
const get_visitor = async (req, res) => {
  console.log(req.query);
  console.log(req.params);
  //const data = await Visitor.getVisitor(req.query.id);
  const data = await Visitor.getVisitor(req.params.id);
  res.json(data[0]);
};

//PATCH /visitor
const patch_visitor = async (req, res) => {
  console.log(req.body);
  const data = await Visitor.patchvisitor(req.body);
  res.json({ result: true });
};

const delete_visitor = async (req, res) => {
  const data = await Visitor.deleteVisitor(req.body.id);
  res.json({ result: true });
};

module.exports = {
  main,
  get_visitors,
  post_visitor,
  get_visitor,
  patch_visitor,
  delete_visitor,
};
