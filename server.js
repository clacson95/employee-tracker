// ************************************************
//    
//     [Table of Contents]
//
//     - Setup
//       + required packages
//       + connection
//     - Functions
//       + runApp()
//       + finish()
//       + userChoice functions
//
// ************************************************


// =====
// Setup
// =====

// include required packages
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

// connection
const db = mysql.createConnection(
    {
        host: "localhost",
        // MySQL username
        user: "root",
        port: 3306,
        // MySQL password
        password: "root",
        database: "employee_db",
    },
    console.log("Successfully connected to the employee_db database.")
);

// =========
// Functions
// =========

// function that runs the application, asking the user a series of prompts
function runApp() {
    inquirer.prompt([
        {
          type: "list",
          name: "userChoice",
          message: "What would you like to do?",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Finish and exit the application.",
          ],
        },
      ])
      .then((response) => {
       
        console.log(response);

        if (response.userChoice === "View all departments") {
          viewDepartment();
        } else if (response.userChoice === "View all roles") {
          viewRoles();
        } else if (response.userChoice === "View all employees") {
          viewEmployees();
        } else if (response.userChoice === "Add a department") {
          addDepartment();
        } else if (response.userChoice === "Add a role") {
          addRole();
        } else if (response.userChoice === "Add an employee") {
          addEmployee();
        } else if (response.userChoice === "Update an employee role") {
          updateRole();
        } else {
          finish();
        }
      });
  }
  
// call the runApp() function to initialize the app
runApp();

// function to finish changes and exit the application
function finish() {
    process.exit()
}

// functions for userChoices

// view all departments
function viewDepartment() {
    // query database
    db.query("SELECT * FROM department", function (err, results) {
      console.table(results);
      runApp();
      if (err) throw err;
    });
  }
  
// view all roles
function viewRoles() {
// query database
db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
    console.log("View all roles");
    runApp();
    if (err) throw err;
});
}

// view all employees
function viewEmployees() {
// Query database
db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    console.log("View all employees by department");
    runApp();
    if (err) throw err;
});
}

// add a department
function addDepartment() {
inquirer.prompt([
    {
        name: "newDepartment",
        type: "input",
        message: "Please enter the name of the new department!",
    },
    ])
    .then((answers) => {
    db.query(
        "INSERT INTO department (department_name) VALUES (?)",
        answers.newDepartment,
        function (err, results) {
          console.table(results);
          runApp();
          if (err) throw err;
        }
    );
    });
}

// add a role
function addRole() {
inquirer.prompt([
    {
        name: "newTitle",
        type: "input",
        message: "Please enter the job title of the new role!",
    },
    {
        name: "departmentID",
        type: "input",
        message: "Please enter the department ID of the new role!",
    },
    {
        name: "newSalary",
        type: "input",
        message: "Please enter the salary of the new role!",
    },
    ])
    .then((answers) => {
    db.query(
        "INSERT INTO role (title, department_id, salary) VALUES (?,?,?)",
        [answers.newTitle, answers.departmentID, answers.newSalary],
        function (err, results) {
          console.table(results);
          runApp();
          if (err) throw err;
        }
    );
  });
}

// add an employee
function addEmployee() {
inquirer.prompt([
    {
        name: "first_name",
        type: "input",
        message: "Please enter the new employee's first name!",
    },
    {
        name: "last_name",
        type: "input",
        message: "Please enter the new employee's last name!",
    },
    {
        name: "role_id",
        type: "input",
        message: "Please enter the role id of the new employee!",
    },
    {
        name: "manager_name",
        type: "input",
        message: "Please enter the employee id of the new employee's manager!",
    },    
    ])
    .then((answers) => {
    db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
        [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
        function (err, results) {
          console.table(results);
          runApp();
          if (err) throw err;
        }
    );
    });
}

// update an employee role
function updateRole() {
inquirer.prompt([
    {
      name: "first_name",
      type: "input",
      message:
        "Please enter the first name of the employee you would like to update!",
    },
    {
      name: "role_id",
      type: "number",
      message:
        "Please enter the new role ID of the employee you would like to update!",
    },
  ])
  .then(function (answers) {
    db.query(
      "UPDATE employee SET role_id = ? WHERE first_name = ?",
      [answers.role_id, answers.first_name],
        function (err, results) {
        if (err) throw err;
        console.log("results");

        db.query(`SELECT * FROM employee`, (err, results) => {
          console.table(results);
          runApp();
          if (err) throw err;
        });
        }
    );
  });
}