const mysql = require("mysql");
const inquirer = require("inquirer");

const db = require("./db/connection");
require("console.table");

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
                case 'Add a Employee': addEmp();
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
function viewAllRoles(){
    db.query(`select * from role`,
    function (err, results) {
        console.log("List of Roles:");
        console.table(results);
        optionPrompt();
    })
}

//function to View all Employees
function viewAllEmps(){
    db.query(`select * from employee`,
    function (err, results) {
        console.log("List of Employees:");
        console.table(results);
        optionPrompt();
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

// function addRole() {
//     inquirer.prompt(
//         [{
//             type: "input",
//             name: "roleName",
//             message: " New Role:"
//         },
//         {
//             type: "input",
//             name: "salary",
//             message: " Salary:"
//         },
//         {
//             type: "input",
//             name: "deptId",
//             message: " Department Id:"
//         }])

//         .then(rname => {
//             db.query(`INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`, rname.roleName, rname.salary, rname.deptId,
//                 function (err, results) {
//                     console.log("Role Added successfully:");

//                 })

//         })

//         .catch(err => {
//             console.log(err);
//         })

// }

optionPrompt();