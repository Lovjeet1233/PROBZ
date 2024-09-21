// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root', // replace with your MySQL username
//   password: 'MYSQL@123', // replace with your MySQL password
//   database: 'studentDB',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database');
// });

// module.exports = connection;


const mysql = require('mysql2');

// MySQL connection using environment variables
const connection = mysql.createConnection({
  host: 'mysql-150caa12-singhlovjeet01-fe15.i.aivencloud.com', // from the screenshot
  user: 'avnadmin',       // replace with your username from the URI
  password: 'AVNS_3ClAUSKd-KSOq_SRU5R', // password from the URI
  database: 'studentDB',  // database name from the screenshot
  port: 27233,            // port number from the screenshot
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;
