//only typescript type
//Tuple
var drink = ["사이다", "롯데"];
drink[0] = "cider";
drink[1] = "lotte";
//drink.push("wow"); // 동작이 된다 => tuple의 한계
console.log(drink);
//readonly : 요소 타입 순서와 길이를 고정
var drink2 = ["사이다", 2000];
// drink2.push("ddddd"); //에러 발생
console.log(drink2);
var olimpic_newgame = [
    {
        name: "쇼트트랙",
        type: "혼성 계주",
    },
    true,
];
// olimpic_newgame[1] = false
/////////////////////////////////////////////////////////
//Enum
var Auth;
(function (Auth) {
    Auth[Auth["admin"] = 0] = "admin";
    Auth[Auth["user"] = 1] = "user";
    Auth[Auth["guset"] = 2] = "guset";
})(Auth || (Auth = {}));
var Cafe;
(function (Cafe) {
    Cafe["americano"] = "\uC544\uBA54\uB9AC\uCE74\uB178";
    Cafe["latte"] = "\uCE74\uD398\uB77C\uB5BC";
})(Cafe || (Cafe = {}));
console.log(Auth.admin);
console.log(Cafe.americano);
var Cake;
(function (Cake) {
    Cake[Cake["choco"] = 0] = "choco";
    Cake[Cake["vanilla"] = 1] = "vanilla";
    Cake["lemon"] = "\uB808\uBAAC";
})(Cake || (Cake = {}));
console.log(Cake.choco, Cake.vanilla, Cake.lemon); //0,1 -> 이왕이면 문자면 문자, 숫자면 숫자를 써라.
//any
//명시적으로 any
var val;
val = 10;
val = true;
//타입스크립트를 쓰는데, 자주 쓰면 의미가 있을까?
// 암묵적으로
var val2;
var student = {
    name: "ssss",
    isPassed: true,
};
var Score;
(function (Score) {
    Score["A"] = "A";
    Score["B"] = "B";
    Score["C"] = "C";
    Score["D"] = "D";
    Score["F"] = "F";
})(Score || (Score = {}));
var baseballStudent = {
    name: "otani",
    isPassed: true,
    Position: "pitcher",
    height: 190,
    backNumber: 17,
    1: Score.B,
    2: Score.A,
};
console.log(baseballStudent);
var heroGame_A = {
    title: "DC 언체인드",
    price: 50000,
    desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
    category: "액션",
    platform: "모바일",
};
var heroGame_B = {
    title: "MARVEL 퓨처파이트",
    price: 65000,
    category: "롤플레잉",
    platform: "모바일",
};
