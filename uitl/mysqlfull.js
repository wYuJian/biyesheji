var mysql = require('mysql');
function conn(){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'admin',
        database : 'onlinestore'
    });
    connection.connect();
    return connection;
}
//{?,?,?...}
module.exports = {conn};