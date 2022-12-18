USE employee_db;

INSERT INTO department (department_name)
VALUES 
('Management'),
('Sales'), 
('Accounting'), 
('Human Resources'), 
('Customer Service');

INSERT INTO role (title, department_id, salary)
VALUES 
('CEO', 1, 400000),
('Regional Manager', 1, 150000), 
('Senior Sales Rep', 2, 100000),
('Sales Rep', 2, 80000),
('Head of Accounting', 3, 75000),
('Accountant', 3, 65000),
('Human Resources Rep', 4, 60000),
('Customer Service Rep', 5, 55000),
('Receptionist', 5, 45000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('David', 'Wallace', 1, null),
('Michael', 'Scott', 2, 1),
('Jim', 'Halpert', 3, 2),
('Dwight', 'Schrute', 3, 2),
('Stanley', 'Hudson', 4, 2),
('Andy', 'Bernard', 4, 2),
('Angela', 'Martin', 5, 2),
('Kevin', 'Malone', 6, 7),
('Oscar', 'Martinez', 6, 7),
('Toby', 'Flenderson', 7, 2),
('Kelly', 'Kapoor', 8, 2),
('Pam', 'Beesly', 9, 2);