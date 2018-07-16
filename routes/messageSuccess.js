var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/messageSuccess', function(req, res, next) {
    var conncetion = mysql.conn();
    var sql_select= `SELECT *
	FROM 
	onlinestore.message;`;
    if(req.body.status == 0|| req.body.status == 1){
        sql_select= `SELECT *
	FROM 
	onlinestore.message where message_status =${req.body.status};`;
    }

    conncetion.query(sql_select,function(error, results, fields){
        if (error) throw error;
        console.log(sql_select)
        if(results.length>0){
            res.send(results)
        }else{
            res.send({'code':false});
        }

    })
});
module.exports = router;
