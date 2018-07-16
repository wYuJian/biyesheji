var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/comment', function(req, res, next) {
    var conncetion = mysql.conn();
    var sql_select_username = `SELECT *
	FROM 
	onlinestore.comment where user_name = '${req.body.username}';`;
    var sql_select=`SELECT *
	FROM 
	onlinestore.product where product_id in(select product_id from onlinestore.comment);`;
    conncetion.query(sql_select_username,function(error, results, fields){
        if (error) throw error;
        var arr =[];
        var results1 = results;
        if(results.length>0){
            conncetion.query(sql_select,function(error, results, fields){
                if (error) throw error;
                if(results.length>0){
                    arr=[results1,results];
                    res.send(arr)
                }
            })
        }else{
            res.send({'code':false});
        }
    })
});
module.exports = router;
