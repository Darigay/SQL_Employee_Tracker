const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'divyasql',
  database: 'employees_db'
});

db.connect(
   function(err) {
        if(err)
            throw(err);
        
     }
)

module.exports = db;