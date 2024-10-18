// (임시) DB에서 전체 댓글 목록을 받았다고 가정
exports.commentinfos = () => {
  return [
    {
      id: 1,
      userid: "helloworld",
      date: "2022-10-31",
      comment: "안녕하세요~",
    },
    {
      id: 2,
      userid: "hello",
      date: "2022-10-31",
      comment: "반가워요",
    },
    {
      id: 3,
      userid: "happy",
      date: "2022-11-31",
      comment: "나이스샷~",
    },
    {
      id: 4,
      userid: "world",
      date: "2022-12-31",
      comment: "첫대글입니다~",
    },
  ];
};
// 함수이기 때문에 주의해야 한다.
