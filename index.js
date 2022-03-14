const mysql = require("mysql");
const inquirer = require("inquirer");

const db = require("./db/connection");
const consoletable = require("console.table");

function optionPrompt() {

    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "Would you like to do?",
            choices: [
                "view all Departments",
                "view all roles",
                "view all employees",
                "View employees by Manager",
                "View employees by department",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Update an employee manager",
                "Delete Employees",
                "Delete Roles",
                "Delete Department",
                "End"]
        })
        .then(userPick => {
            switch (userPick.task) {
                case 'view all Departments': viewAllDept();
                    break;
                case 'view all roles': viewAllRoles();
                    break;
                case 'view all employees': viewAllEmps();
                    break;
                case 'View employees by Manager': viewEmpByMan();
                    break;
                case 'View employees by department': viewEmpByDept();
                    break;
                case 'Add a department': addDept();
                    break;
                case 'Add a role': addRole();
                    break;
                case 'Add an employee': addEmp();
                    break;
                case 'Update an employee role': updateEmpRole();
                    break;
                case 'Update an employee Manager': updateEmpMgr();
                    break;
                case 'Delete Employees': deleteEmp();
                    break;
                case 'Delete Roles': deleteRole();
                    break;
                case 'Delete Department': deleteDept();
                    break;

                default: End();

            }
        })

}

// function to View all Departments
function viewAllDept() {
    db.query(`select * from department`,
        function (err, results) {
            console.log("List of Department:");
            console.table(results);
            optionPrompt();
        })
}

// function to View all Roles
function viewAllRoles() {
    db.query(`select * from role`,
        function (err, results) {
            console.log("List of Roles:");
            console.table(results);
            optionPrompt();
        })
}

//function to View all Employees
function viewAllEmps() {
    db.query(`select * from employee`,
        function (err, results) {
            console.log("List of Employees:");
            console.table(results);
            optionPrompt();
        })
}

//function to View Employees by Manager
 function viewEmpByMan(){
 inquirer.prompt(
    {
        type: "input",
        name: "managerId",
        message: " Manager ID:"
    }
    )

 .then(mname => {
            db.query(`SELECT * FROM employee WHERE manager_id = ?`, mname.managerId,
                function (err, results) {
                    console.log("Employee Names Display successful:");
                    console.table(results);
                    optionPrompt();
                })
        })
 }

 //function to View Employees by Department
 function viewEmpByDept(){
 inquirer.prompt(
    {
        type: "input",
        name: "departmentId",
        message: " Department ID:"
    }
    )

 .then(dname => {
            db.query(`SELECT * FROM employee INNER JOIN role ON employee.role_id = role.id WHERE role.department_id = ?`, dname.departmentId,
                function (err, results) {
                    console.log("Employee Names Display successful:");
                    console.table(results);
                    optionPrompt();
                })
       })
 }

// Function to add a Department
function addDept() {
    inquirer.prompt(
        {
            type: "input",
            name: "deptName",
            message: " Department name:"
        }
    )
        .then(dname => {
            db.query(`INSERT INTO department (name) VALUES(?)`, dname.deptName,
                function (err, results) {
                    console.log("Departent Added successfully:");
                    viewAllDept();
                })
        })
}

//Function to add a Role
function addRole() {
    inquirer.prompt(
        [{
            type: "input",
            name: "roleName",
            message: " New Role:"
        },
        {
            type: "input",
            name: "salary",
            message: " Salary:"
        },
        {
            type: "input",
            name: "deptId",
            message: " Department Id:"
        }])

        .then(rname => {
            const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
            const params = [rname.roleName, rname.salary, rname.deptId];
            db.query(sql, params, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log("Role Added successfully:");
                viewAllRoles();
            })
        })
}

// Function to add a Employee
function addEmp() {
    inquirer.prompt(
        [{
            type: "input",
            name: "firstName",
            message: " First Name:"
        },
        {
            type: "input",
            name: "lastName",
            message: " Last Name:"
        },
        {
            type: "input",
            name: "roleId",
            message: " Role ID:"
        },
        {
            type: "input",
            name: "managerId",
            message: " Manager Id:"
        }])

        .then(ename => {
            const esql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
            const eparams = [ename.firstName, ename.lastName, ename.roleId, ename.managerId];
            db.query(esql, eparams, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log("Employee Added successfully:");
                viewAllEmps();
            })
        })
}

optionPrompt();