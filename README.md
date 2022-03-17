# SQL_Employee_Tracker

## GitHub 
The URL of the GitHub repository
https://github.com/Darigay/SQL_Employee_Tracker

## Table of Contents
- Description
- usage
- Technologies
- Dependencies
- Screenshots
- Resources
- Contact

## Description:
Databases are the foundation of full-stack web applications. When using this applications, our users will be able to store and retrieve data. 
We will be using the database management system (DBMS) and MySQL in this app. MySQL is the most popular SQL database. The SQL in MySQL is short for Structured Query Language, and that structure is relational. A relational database stores and finds data based on its relationship to other data in the database. Relational databases are tabular, meaning data is stored in tables composed of rows and columns, much like a spreadsheet.
MySQL Workbench, was used initially during development of database and to interface with our databases.
The command line prompt is once connected to node it will prompt the list of queries an user would like to do on the database and respond accordingly.

## Usage
GIVEN a command-line application that accepts user input and sql database is created using schema.sql and seeds.sql.
The application is started, by "node index.js", once the aplication is run the user is presented with the following options: view all departments, view all roles, view all employees, view employees by manager, view employees by deapartment, add a department, add a role, add an employee, update an employee role, update an employee manager, delete employee, delete a role and delete department.
WHEN the user chooses to view all departments, the user is presented with a formatted table showing department names and department ids
WHEN the user chooses to view all roles,the user is presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN the user chooses to view all employees, then the user is presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
WHEN the user chooses to add a department, then the user is prompted to enter the name of the department and that department is added to the database.
WHEN the user chooses to add a role, then the user is prompted to enter the name, salary, and department for the role and that role is added to the database.
WHEN the user chooses to add an employee, then the user is prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.
WHEN the user chooses to update an employee role, the the user is prompted to select an employee id to update and their new role id and this information is updated in the database.
WHEN the user chooses to update an employee Manager, the the user is prompted to select an employee id to update and their new manager id and this information is updated in the database.
WHEN the user chooses to delete an employee , the the user is prompted to select an employee id and this employee is deleted in the database.
WHEN the user chooses to delete an role , the the user is prompted to select an role id and that role is deleted in the database.
WHEN the user chooses to delete an department, the the user is prompted to select an employee id and this employee is deleted in the database.


## WalkThrough video of the Application
https://user-images.githubusercontent.com/94805706/158734179-f6351ec0-a0ce-4e56-9243-3a36f3b904b8.mp4

## Technologies
- Javascript
- Node.Js
- mysql
- mysql2
- npm packages inquirer , console.table
- Github

## Dependencies
- CLI
- console.table
- inquirer
- mysql
- mysql2

## Screenshots
![SQL1](https://user-images.githubusercontent.com/94805706/158314770-749cf0ff-3224-4ae6-8017-dc8a7005202a.png)

![SQL2](https://user-images.githubusercontent.com/94805706/158314778-a81f2b43-1344-4232-b747-7f00a182bf7d.png)

![SQL3](https://user-images.githubusercontent.com/94805706/158314786-c98e74b3-e4e7-4f5f-8bb9-0d891f12a9b8.png)
![SQL4](https://user-images.githubusercontent.com/94805706/158314794-46008ebb-97e1-4903-a1f3-416d843987c7.png)

![SQL5](https://user-images.githubusercontent.com/94805706/158314801-cfc7065d-258f-44a4-b9d0-a76c9e46fd86.png)


## Resources
- UofU BootCamp MySql Modules
- w3schools.com

## Contact
Email Address : divya.arigay@gmail.com 
Github: Darigay@github.com


© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.


