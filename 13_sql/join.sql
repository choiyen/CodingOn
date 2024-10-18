-- JOIN
select * from orders;
select * from customer;
select * from customer, orders;


-- customer, orders 테이블의 행 개수 구하기
select count(*) from customer;
select count(*) from orders;
select count(*) from customer,orders;
-- ===> cross join

-- where 절을 이용해 조인의 조건을 추가해야 함.
-- 테이블이름.속성 :  어느 테이블의 속성인지 가리킴
select * from customer, orders where customer.id = orders.id;
-- 두개의 칼럼이 일치하는 애들만 출력함.
select * from customer, orders 
        where customer.id = orders.id
        ORDER BY customer.name;

select * from customer, orders where customer.id = orders.id; 
-- => INNER JOIN
SELECT * from customer INNER JOIN orders on customer.id = orders.id;

-- 고객 이름과 고객이 주문한 상품명, 상품 가격을 조회.
-- 고객 이름 : customer 테이블
-- 상품명, 상품 가격 : orders

SELECT name, prodname, price from customer,orders where customer.id = orders.id;

-- 고객 이름별로 주문한 제품의 총 구매액을 고객 별로 오름차순 정렬
select name, sum(price * amount) as "total_price" from customer, orders where customer.id = orders.id group by name ORDER by total_price;

