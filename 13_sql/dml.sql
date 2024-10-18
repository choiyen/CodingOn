use user;

create table member (
id varchar(20) not null primary key,
name varchar(5) not null,
age  int,
gender varchar(2) not null,
email varchar(50),
promotion varchar(2)
);

alter table member modify id varchar(10);
alter table member drop age;
alter table member add interest varchar(100);

create table customer (
id varchar(20) not null primary key,
name varchar(20) not null,
travel varchar(20) not null,
phone varchar(20) not null,
birthday varchar(20) not null
);


INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');


create table orders (
	orderid int primary key auto_increment,
    id char(10) not null, -- FK
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (id) references customer(id) on update cascade on delete cascade
);

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);  

select * from orders;
select * from customer;

-- 주문 테이블에서 총 주문 건수를 샌다.
select count(*) from orders; 
-- 행의 객수를 의미함.

-- 주문 테이블에서 주문한 고객의 수
select count(distinct id) from orders;

-- <GROUP BY>
- "~별로"
-- 고객 별로 주문 건수 구하기
select id, count(*) from orders GROUP BY id;

-- 고객 별로 주문한 상품의 총 수량
select id, sum(amount) from orders GROUP BY id;

-- 고객 별로 주문한 총 주문액 구하기
select id, sum(amount * price) from orders GROUP BY id;

-- 상품 별로 판매 갯수를 구하기
select prodname, sum(amount) from orders GROUP BY prodname;


-- <HAVING>
-- group by 절 이후에 추가로 조건을 걸때.
-- 그룹에 대해서 필터링.

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기
select id, sum(amount), sum(amount * price) as "Total" from orders 
    GROUP BY id 
    HAVING sum(amount * price) >= 10000;
-- 보통 집계 함수를 사용한 조건을 검사할 떄 쓰임.


-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기
-- 단, id가 "bunny"인 고객은 제외하고 출력할 것

select id, sum(amount), sum(amount * price) as "Total" from orders 
    WHERE id != 'bunny'
    GROUP BY id 
    HAVING sum(amount * price) >= 10000;
-- Group BY를 사용할 떄의 주의 사항
-- select 절에서 group by 에서 사용한 속성과 집계 함수만 사용 가능
--



INSERT INTO user VALUES("hong1234","8o4bkg", "홍길동", 'M', 1990-01-31, 33);
INSERT INTO user VALUES("sexysung","87awjkdf", "성춘향", 'F', 1992-03-31, 31);
INSERT INTO user VALUES("power70","qxur8sda", "변사또", 'M', 1970-05-02, 53);
INSERT INTO user VALUES("hanjo","jk48fn4", "한조", 'M', 1984-10-18, 39);
INSERT INTO user VALUES("widowmaker","38ewifh3", "위도우", 'F', 1976-06-27, 47);
INSERT INTO user VALUES("dvadva","k3f3ah", "송하나", 'F', 2001-06-03, 22);
INSERT INTO user VALUES("jungkrat","4ifha7f", "정크랫", 'M', 1999-11-11, 24);


-- 실습 5. SELECT
select * from user ORDER BY birthday asc;
-- 기본이 오름차순이라 생략 가능
select * from user WHERE gender = 'M' ORDER by name desc;

select id, name from user WHERE birthday >= "1990-01-01" and birthday <= "2000-01-01";

select * from user WHERE birthday like '%-06-%' ORDER by birthday;

select * from user WHERE birthday like '197%' and gender = 'M';
select * from user ORDER BY age desc limits 3;
select * from user WHERE age >= 25 and age <= 50;
update user set pw = '12345678' WHERE id = "hong1234";
delete from user WHERE id = "jungkrat";
