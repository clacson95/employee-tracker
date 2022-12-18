# employee-tracker [![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
This application is a Node.js command-line application that also utilizes Inquirer and MySQL.

## Table of Contents
* [Video](#Video)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [How to Contribute](#how-to-contribute)
* [Questions](#questions)

## Video
### [Click to watch a demo video!]()

## Installation
1. Ensure node.js is installed. 
2. Ensure there is a `.gitignore` file (with `node_modules` and `.DS_Store` written inside) before installing any npm dependencies. 
3. Create a `package.json` file by entering the `npm init -y` command in the terminal. 
4. Use the following commands to install required dependencies:
* `npm i inquirer@8.2.4`
* `npm i mysql`
* `npm i mysql2`
* `npm i console.table`
5. Setup your sql files:
  1. Access the mysql terminal by using the command: `mysql -u <enter your username> -p`. Then type in your password when prompted.
  2. Run the following commands in the mysql terminal: 
    * `source db/schema.sql`
    * `source db/seed.sql`

## Usage

To use this back-end application, fork the repository, clone the repository, or download the ZIP file to access the code for yourself. This will require you to have a text editor. I recommend Visual Studio Code, but there are a plethora of other options available.

Then, open the `server.js` file in your text editor's terminal, and enter `node server.js`.

## License

    Copyright 2022 Caleb Lacson

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        [http://www.apache.org/licenses/LICENSE-2.0]

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

## How to Contribute
Fork the repository to make the code your own. Feel free to submit a push request if you have made additions you think others would find beneficial.

## Questions
If you have any questions regarding this project, or anything else regarding my work, please reach out to me via email or GitHub.

[caleb.lacson@gmail.com](caleb.lacson@gmail.com)
  
[github.com/clacson95](github.com/clacson95)
