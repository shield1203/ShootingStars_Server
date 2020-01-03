var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '45326512',
    port : 3306,
    database : 'Book'
});

connection.connect();

connection.query('SELECT * FROM list', function (error, results, fields) {
    if(error){
        //console.log(error);
    }
    
    console.log(results);
});

connection.end();