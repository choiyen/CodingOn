create table visitor (
  id int not null primary key auto_increment,
  name varchar(10) not null,
  comment mediumtext
);

insert into visitor (name, comment) values("홍길동", "내가 왔다");
insert into visitor (name, comment) values("이찬혁", "으라차차");

-- user 생성
create user 'user'@'localhost' identified by '1234';
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
grant all privileges on *.* to 'user'@'localhost' with grant option;

-- 실습
CREATE TABLE user (
  id INT NOT NULL PRIMARY KEY auto_increment,
  userid VARCHAR(20) NOT NULL,
  name VARCHAR(10) NOT NULL,
  pw VARCHAR(20) NOT NULL
);