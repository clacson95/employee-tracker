const express = require("express");
const app = express();
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const PORT = process.env.PORT || 3306;

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

// function that runs the application, asking the user a series of prompts
function runApp() {
    inquirer.prompt([
        {
          type: "list",
          name: "userChoice",
          message: "What would you like to do? Please use the arrow keys to select an option, then hit Enter.",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Finish",
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