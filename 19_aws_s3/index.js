const express = require("express");
const multer = require("multer");
const dotenv = require("dotenv").config();
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

//aws 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_KEY_ID,
  secretAccessKey: process.env.AWS_S3_ACCESS_KEY,
  region: process.AWS_S3_REGION,
});

//aws s3 인스턴스 생성
const s3 = new aws.S3();

//aws multer 설정
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", //파일접근 권한(public-read로 해야 업로드된 파일이 공개)
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.array("files"), (req, res) => {
  console.log(req.files);
  res.send(req.files);
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
