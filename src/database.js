const mysql = require('mysql2');

const database = mysql.createConnection({
   host : "localhost",
   user : "root",
   password : "password",
   database : "twitter_clone_nodejs"
})

database.connect((err)=> err ? console.log(err): "");

module.exports = database;
