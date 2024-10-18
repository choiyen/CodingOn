// get /
const main = (req, res) => {
  res.render("index");
};

const users = require("../model/user");

const ports = (req, res) => {
  let user = users.users().split("\n");
  let hum = 0;
  let count = [];
  for (let i = 0; i < user.length; i++) {
    count.push(user[i].split("//"));
  }

  console.log(count[0]);
  console.log(count[1]);
  console.log(count[2]);

  console.log(count[0][0]);
  console.log(count[0][1]);

  for (let j = 0; j < count.length; j++) {
    if (req.body.userId === count[j][0] && req.body.userPw === count[j][1]) {
      hum++;
    }
  }

  console.log(hum);

  if (hum == 1) {
    res.json({ userInfo: req.body, isSuccess: true });
  } else {
    res.json({ isSuccess: false }); // 유저가 존재하지 않은 상황은 에러가 아님.
  }
};

module.exports = { main, ports };
