DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);


CREATE TABLE role (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
);

CREATE TABLE employee (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title VARCHAR(30) NOT NULL, 
    department_name VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
	manager_name VARCHAR(30),
    FOREIGN KEY (department_name) REFERENCES role(department_name)
    FOREIGN KEY (salary) REFERENCES role(salary)
);