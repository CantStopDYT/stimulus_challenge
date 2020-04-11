const express = require('express');
const app = express();
const mysql = require("mysql");




app.get("/stats", (req, res) => {
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : ' ',
        database : 'test'
    });
    
    connection.query("SELECT * FROM testingTableName", (err, rows, fields) => {
       if (err) {
           //todo: Handle errors...
       } else {
           //todo: respond with the necessary stats...
       }
    })
});