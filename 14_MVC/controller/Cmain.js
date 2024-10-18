const Comment = require("../model/Comment");

// get /
const main = (req, res) => {
  res.render("index");
};

//GET /comments
const comments = (req, res) => {
  console.log(Comment.comments);
  res.render("comments", { commentinfos: Comment.commentinfos() }); // 함수의 return 값을 보내주는 것.
};

// GET /comment/:id
const comment = (req, res) => {
  console.log("처리 중입니다.");
  console.log(req.params); // 라우트 매개변수에 대한 정보 담겨 있음
  console.log("해당 id의 정보는 다음과 같습니다.");
  console.log(req.params.id);

  const comments = Comment.commentinfos();
  const commentid = req.params.id;
  console.log(comments[commentid - 1]);
  if (commentid < 1 || commentid > comments.length) {
    return res.render("404");
  }

  if (isNaN(commentid)) {
    return res.render("404");
  }

  res.render("comment", { commentinfo: comments[commentid - 1] });
};

module.exports = { main, comments, comment };
