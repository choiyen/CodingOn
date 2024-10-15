const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/paractice", (req, res) => {
  res.render("paractice");
});

app.get("/paractice2", (req, res) => {
  res.render("paractice2");
});

app.get("/priactice", (req, res) => {
  res.render("priactice");
});

//ajax get
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

//ajax post
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//axios get
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

//axios get
app.get("/axios-get", (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

// //axios post
// app.post("/axios", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });

const userID = {
  id: "user",
  pw: "pw",
};
app.post("/practice2-post", (req, res) => {
  console.log(req.body);
  const id = "choi";
  const pw = "1234";
  if (req.body.id === userID.id || req.body.password === userID.pw) {
    res.json({ userID: req.body, isSuccess: true });
  } else {
    res.json({ isSuccess: false });
  }
});

//axios get
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

//fetch post
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`port is opening on ${PORT}`);
});
