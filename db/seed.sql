INSERT INTO department (department_name, department_id)
VALUES 
('Management', 1),
('Sales', 2), 
('Accounting', 3), 
('Human Resources', 4), 
('Customer Service', 5),

INSERT INTO role (job_title, role_id, department_name, salary)
VALUES 
('CEO', 1, 'Management', '400000'),
('Regional Manager', 2, 'Management', '150000'), 
('Senior Sales Rep', 3, 'Sales', '100000'),
('Sales Rep', 4, 'Sales', '80000'),
('Head of Accounting', 5, 'Accounting', '75000'),
('Accountant', 6, 'Accounting', '65000'),
('Human Resources Rep', 7. 'Human Resources', '60000'),
('Customer Service Rep', 8, 'Customer Service' '55000',),
('Receptionist', 9, 'Customer Service', '45000'),

INSERT INTO employee (employee_id, first_name, last_name, job_title, department_name, salary, manager_id)
VALUES 
(1, 'David', 'Wallace', 'CEO', 'Management', '400000', null),
(2, 'Michael', 'Scott', 'Regional Manager', 'Management', '150000', 'David Wallace'),
(3, 'Jim', 'Halpert', 'Senior Sales Rep', 'Sales', '100000', 'Michael Scott'),
(4, 'Dwight', 'Schrute', 'Senior Sales Rep', 'Sales', '100000', 'Michael Scott'),
(5, 'Stanley', 'Hudson', 'Sales Rep', 'Sales', '80000', 'Michael Scott'),
(6, 'Andy', 'Bernard', 'Sales Rep', 'Sales', '80000', 'Michael Scott'),
(7, 'Angela', 'Martin', 'Head of Accounting', 'Accounting', '75000', 'Michael Scott'),
(8, 'Kevin', 'Malone', 'Accountant', 'Accounting', '65000', 'Angela Martin'),
(9, 'Oscar', 'Martinez', 'Accountant', 'Accounting', '65000', 'Angela Martin'),
(10, 'Toby', 'Flenderson', 'Human Resources Rep', 'Human Resources', '60000', 'Michael Scott'),
(11, 'Kelly', 'Kapoor', 'Customer Service Rep', 'Customer Service' '55000', 'Michael Scott'),
(12, 'Pam', 'Beesly', 'Receptionist', 'Customer Service', '45000', 'Michael Scott'),