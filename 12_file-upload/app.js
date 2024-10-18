const express = require("express");
const app = express();
const PORT = 8000; //express 관련 설정

//multer 관련 설정
const multer = require("multer");
const path = require("path"); // 경로 처리를 위한 내장 모듈

const upload = multer({
  dest: "uploads/", // dest : 클라이언트가 업로드한 파일을 저장할 서버측 검토
});

app.use("/uploads", express.static(__dirname + "/uploads"));

// multer 세부 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    //destination : 경로 설정
    destination(req, file, done) {
      // done : callback function
      // done(null, "~~~") 여기서 null은 error를 의미하는 매개 변수
      // 에러가 없으므로 "null" 이라고 전달하여 콜백함수를 호출
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 "확장자를 추출"
      console.log("ext  :", ext);
      console.log(path.basename(file.originalname, ext));
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs"); //ejs를 쓰기 위한 설정
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.render("index"));

app.get("/paractice", (req, res) => res.render("paractice"));

// multer 세부 설정
const uploadDetailpar = multer({
  storage: multer.diskStorage({
    //destination : 경로 설정
    destination(req, file, done) {
      // done : callback function
      // done(null, "~~~") 여기서 null은 error를 의미하는 매개 변수
      // 에러가 없으므로 "null" 이라고 전달하여 콜백함수를 호출
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 "확장자를 추출"
      console.log("ext  :", ext);
      console.log(path.basename(file.originalname, ext));
      done(null, path.basename(file.originalname, ext) + req.body.id + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.post("/paractice-POST", uploadDetailpar.single("userfile"), (req, res) => {
  console.log(req.body);
  res.render("paractice-POST", {
    title: "아이디 정보",
    userInfo: req.body,
    file: req.file, //파일 정보도 넘겨 줘야 함.
  });
});

//1. singe() : 하나의 파일을 업로드
//upload.single("userfile");//index에서 설정한 파일 테그의 이름
// 클라이언트의 요청이 들어오면 multer 설정(upload 변수)에 따라 파일을 업로드 한 후
//req.file 객체를 생성함.

app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  //req.file : 파일 업로드 정보
  //req.body : 파일 외의 정보를 확인할 수 있음
  console.log(req.file);
  console.log(req.body);
  res.send("파일 업로드 완료!");
});

// 2. array() : 여러 파일을 한번에 업로드
//uploadDetall.array("userfiles");
//파일을 업로드 한 후, req.files라는 객체가 생성됨.
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files); // [{파일1의 정보}, {파일2의 정보}, {파일3의 정보}, ....]
  console.log(req.body); //
  res.send("하나의 인풋에 여러 파일 업로드 완료");
});

//3. fields() : 여러 파일을 각각의 인풋에 업로드
// req.files에서 파일 정보를 확인함.
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("여러 인풋에 각각의 파일 업로드 완료");
  }
);

app.post("/dynamicFile", uploadDetail.single("dynamicUserFile"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

/*
{
  fieldname: 'userfile', // 폼에 정의한 name 값
  originalname: '12_í\x8C\x8Cì\x9D¼ì\x97\x85ë¡\x9Cë\x93\x9C.pdf', // 원본 파일 명
  encoding: '7bit', // 파일 인코딩 타입
  mimetype: 'application/pdf', //파일 타입
  destination: 'uploads/', // 파일 저장 경로
  filename: 'a349a01a0e1cfc0d9a994385eb215236', //destination에 저장된 파일 명
  path: 'uploads\\a349a01a0e1cfc0d9a994385eb215236', //업로드 된 파일의 전체 경로
  size: 4205708 //파일 크기
}
*/

app.listen(PORT, () => {
  console.log(`PORT is ${PORT} opening`);
});
