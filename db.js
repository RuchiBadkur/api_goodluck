const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:  'newpassword', //'mysql123',
    database: 'online_exam'
});