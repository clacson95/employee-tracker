INSERT INTO department (department_name)
VALUES 
('Management'),
('Sales'), 
('Accounting'), 
('Human Resources'), 
('Customer Service');

INSERT INTO role (title, department_name, salary)
VALUES 
('CEO', 'Management', 400000),
('Regional Manager', 'Management', 150000), 
('Senior Sales Rep', 'Sales', 100000),
('Sales Rep', 'Sales', 80000),
('Head of Accounting', 'Accounting', 75000),
('Accountant', 'Accounting', 65000),
('Human Resources Rep', 'Human Resources', 60000),
('Customer Service Rep', 'Customer Service' 55000),
('Receptionist', 'Customer Service', 45000);

INSERT INTO employee (first_name, last_name, title, department_name, salary, manager_name)
VALUES 
('David', 'Wallace', 'CEO', 'Management', 400000, null),
('Michael', 'Scott', 'Regional Manager', 'Management', 150000, 'David Wallace'),
('Jim', 'Halpert', 'Senior Sales Rep', 'Sales', 100000, 'Michael Scott'),
('Dwight', 'Schrute', 'Senior Sales Rep', 'Sales', 100000, 'Michael Scott'),
('Stanley', 'Hudson', 'Sales Rep', 'Sales', 80000, 'Michael Scott'),
('Andy', 'Bernard', 'Sales Rep', 'Sales', 80000, 'Michael Scott'),
('Angela', 'Martin', 'Head of Accounting', 'Accounting', 75000, 'Michael Scott'),
('Kevin', 'Malone', 'Accountant', 'Accounting', 65000, 'Angela Martin'),
('Oscar', 'Martinez', 'Accountant', 'Accounting', 65000, 'Angela Martin'),
('Toby', 'Flenderson', 'Human Resources Rep', 'Human Resources', 60000, 'Michael Scott'),
('Kelly', 'Kapoor', 'Customer Service Rep', 'Customer Service' 55000, 'Michael Scott'),
('Pam', 'Beesly', 'Receptionist', 'Customer Service', 45000, 'Michael Scott');