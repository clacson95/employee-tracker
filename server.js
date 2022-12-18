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
const express = require("express");
const app = express();
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const PORT = process.env.PORT || 3306;

// connection
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        port: 3306,
        password: "password",
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
          message: "What would you like to do? Use the arrow keys to select an option, then hit the 'Enter' key.",
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
            if (err) throw err;
            console.table(results);
            runApp();
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
        name: "department",
        type: "input",
        message: "Please choose the department of the new role!",
    },
    {
        name: "newSalary",
        type: "input",
        message: "Please enter the salary of the new role!",
    },
    ])
    .then((answers) => {
    db.query(
        "INSERT INTO role (title, department_name, salary) VALUES (?,?,?)",
        [answers.newTitle, answers.department, answers.newSalary],
        function (err, results) {
            if (err) throw err;
            console.table(results);
            runApp();
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
        name: "title",
        type: "input",
        message: "Please enter the job title of the new employee!",
    },
    {
        name: "manager_name",
        type: "input",
        message: "Please enter the full name of the new employee's manager!",
    },    
    ])
    .then((answers) => {
    db.query(
        "INSERT INTO employee (first_name, last_name, title, manager_name) VALUES (?,?,?,?)",
        [answers.first_name, answers.last_name, answers.title, answers.manager_name],
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
        name: "role_id",
        type: "number",
        message:
        "Please enter the employee's new role ID!",
    },
    {
        name: "first_name",
        type: "input",
        message:
        "Please enter the first name of the employee you would like to update!",
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
            if (err) throw err;
            console.table(results);
            runApp();
        });
        }
    );
    });
}