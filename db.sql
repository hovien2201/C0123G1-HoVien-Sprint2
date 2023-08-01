CREATE DATABASE venco_fan;
USE venco_fan;
	
CREATE TABLE roles(
id INT PRIMARY KEY AUTO_INCREMENT,
role_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE users(
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(50) UNIQUE NOT NULL,
`password` VARCHAR(100) NOT NULL,
email VARCHAR(50) NOT NULL,
is_delete BIT DEFAULT 0,
verification_code INT UNIQUE,
role_id INT NOT NULL,FOREIGN KEY(role_id) REFERENCES roles(id)
);

 CREATE TABLE type_product(
 id INT PRIMARY KEY AUTO_INCREMENT,
type_name VARCHAR(50) UNIQUE NOT NULL
 );

CREATE TABLE img_product(
id INT PRIMARY KEY AUTO_INCREMENT,
img TEXT  NOT NULL
);

CREATE TABLE products(
id INT PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
price DOUBLE NOT NULL,
quantity INT NOT NULL,
is_delete BIT DEFAULT 0,
descrip VARCHAR(1000),
create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
update_date DATETIME,
type_product INT NOT NULL,FOREIGN KEY(type_product) REFERENCES type_product(id),
img_id INT NOT NULL,FOREIGN KEY(img_id) REFERENCES img_product(id)
);

create table customers(
id INT PRIMARY KEY AUTO_INCREMENT,
`name` varchar(255) not null,
birthday varchar(50) not null,
user_id INT NOT NULL,
FOREIGN KEY(user_id) REFERENCES users(id),
gender int not null,
phone_number varchar(11) NOT NULL  UNIQUE ,
email varchar(255) not null UNIQUE,
address varchar(255) not null,
image TEXT ,
is_delete BIT DEFAULT 0,
create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
update_date DATETIME
);

CREATE TABLE bills(
id INT PRIMARY KEY AUTO_INCREMENT,
create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
total_price DOUBLE NOT NULL	,
is_delete BIT DEFAULT 0,
customer_id INT NOT NULL,FOREIGN KEY(customer_id) REFERENCES customers(id)
);

CREATE TABLE bill_detail(
id INT PRIMARY KEY AUTO_INCREMENT,
quantity INT NOT NULL,
product_id INT NOT NULL,FOREIGN KEY(product_id) REFERENCES products(id),
price DOUBLE NOT NULL,
bill_id  INT NOT NULL,FOREIGN KEY(bill_id) REFERENCES bills(id)
);

CREATE TABLE reviews(
id INT PRIMARY KEY AUTO_INCREMENT,
customer_id INT NOT NULL,FOREIGN KEY(customer_id) REFERENCES customers(id),
rating INT NOT NULL	,
comments VARCHAR(1000),
create_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE shoping_cart(
id INT PRIMARY KEY AUTO_INCREMENT,
product_id INT NOT NULL,FOREIGN KEY(product_id) REFERENCES products(id),
quantity INT NOT NULL,
price DOUBLE NOT NULL,
bill_id  INT NOT NULL,FOREIGN KEY(bill_id) REFERENCES bills(id)
);