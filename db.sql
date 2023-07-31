CREATE DATABASE clothing_store;
USE clothing_store;
	
CREATE TABLE roles(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
role_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE users(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(50) UNIQUE NOT NULL,
`password` VARCHAR(100) NOT NULL,
email VARCHAR(50) NOT NULL,
is_delete BIT DEFAULT 0,
verification_code INT UNIQUE,
role_id BIGINT NOT NULL,FOREIGN KEY(role_id) REFERENCES roles(id)
);

 CREATE TABLE type_product(
 id BIGINT PRIMARY KEY AUTO_INCREMENT,
type_name VARCHAR(50) UNIQUE NOT NULL
 );

CREATE TABLE img_product(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
img VARCHAR(200) UNIQUE NOT NULL
);

CREATE TABLE colors(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
color VARCHAR(10) UNIQUE NOT NULL
);


CREATE TABLE products(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
price BIGINT NOT NULL,
quantity INT NOT NULL,
is_delete BIT DEFAULT 0,
descrip VARCHAR(1000),
create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
update_date DATETIME,
type_product BIGINT NOT NULL,FOREIGN KEY(type_product) REFERENCES type_product(id),
color_id BIGINT NOT NULL,FOREIGN KEY(color_id) REFERENCES colors(id),
img_id BIGINT NOT NULL,FOREIGN KEY(img_id) REFERENCES img_product(id)
);

create table customers(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
`name` varchar(255) not null,
birthday varchar(50) not null,
user_id BIGINT NOT NULL,
FOREIGN KEY(user_id) REFERENCES users(id),
gender int not null,
phone_number varchar(11) NOT NULL  UNIQUE ,
email varchar(255) not null UNIQUE,
address varchar(255) not null,
image mediumtext ,
is_delete BIT DEFAULT 0,
create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
update_date DATETIME
);

create table employees(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
user_id BIGINT NOT NULL,
FOREIGN KEY(user_id) REFERENCES users(id),
`name` varchar(255) not null,
birthday varchar(50) not null,
gender varchar(10) not null,
email varchar(255) not null UNIQUE,
phone_number varchar(11) NOT NULL  UNIQUE ,
address varchar(255) not null,
salary BIGINT not null CHECK (salary > 0),
image mediumtext,
is_delete BIT DEFAULT 0,
create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
update_date DATETIME
);

CREATE TABLE bill_detail(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
quantity INT NOT NULL,
product_id BIGINT NOT NULL,FOREIGN KEY(product_id) REFERENCES products(id),
price BIGINT NOT NULL,
customer_id BIGINT NOT NULL,FOREIGN KEY(customer_id) REFERENCES customers(id),
employee_id BIGINT NOT NULL,FOREIGN KEY(employee_id) REFERENCES employees(id)
);

CREATE TABLE bills(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
bill_detail_id  BIGINT NOT NULL,FOREIGN KEY(bill_detail_id) REFERENCES bill_detail(id),
create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
total_price BIGINT NOT NULL	,
is_delete BIT DEFAULT 0
);

CREATE TABLE reviews(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
product_id BIGINT NOT NULL,FOREIGN KEY(product_id) REFERENCES products(id),
customer_id BIGINT NOT NULL,FOREIGN KEY(customer_id) REFERENCES customers(id),
rating INT NOT NULL	,
comments VARCHAR(1000),
create_date DATETIME DEFAULT CURRENT_TIMESTAMP
)