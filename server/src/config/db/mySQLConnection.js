

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    post: 3306,
    password: '13052003phuong',
    database: 'qlthuvien'
});


module.exports = connection;