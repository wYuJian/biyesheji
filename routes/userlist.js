var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/userlist', function(req, res, next) {
    var conncetion = mysql.conn();
    console.log(req.query.username);
    // console.log(req.query.password);
    var sql_select= `SELECT *
	FROM 
	onlinestore.users;`;
    if(req.body.username != undefined){
        sql_select= `SELECT *
	FROM 
	onlinestore.users where username = '${req.body.username}';`;
    }
    if(req.body.username == ''){
        sql_select= `SELECT *
	FROM 
	onlinestore.users limit 0,10;`;
    }
    conncetion.query(sql_select,function(error, results, fields){
        if (error) throw error;
        if(results.length>0){
            res.send(results)
        }else{
            res.send({'code':false});
        }

    })
});
module.exports = router;
