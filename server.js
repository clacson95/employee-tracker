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
