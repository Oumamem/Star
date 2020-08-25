
 
const mysql = require("mysql");

// Create a connection to the database

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'star',
    port:'3306'
});


 
connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
}); 

module.exports = connection;