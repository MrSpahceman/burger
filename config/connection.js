//@TODO: Create  table if ot exists "burgers"
//@Notice:

//calling dependencies and creating mysql connection
var mysql = require('mysql');
var express = require('express');

//creating express app instance
var app = express();

// how I'm connecting to mysql data base
var PORT = process.env.PORT || 8080;
var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,

    // Your username
    user: "root",

    // Your password
    password: "palacios",
    database: "burgers_db"
});
//Initiating mysql connection
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    //call afterConnections below
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM burgers", function(err, res) {
        if (err) throw err;
        //Logging all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}
//Initiate the listener.
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
//exporting this connection.js
module.exports = connection;