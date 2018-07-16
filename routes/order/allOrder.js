var express = require('express');
var router = express.Router();
var mysql = require('../../uitl/mysqlfull');
/* GET users listing. */
router.get('/', function(req, res, next) {
    var conncetion = mysql.conn();
    var sql_select=`SELECT *
	FROM 
	onlinestore.order where user_name ='${req.query.username}';`;

    var sql_select2=`SELECT *
	FROM 
	onlinestore.product where product_id in (select product_id from onlinestore.order where user_name = '${req.query.username}');`;
    conncetion.query(sql_select,function (error, results, fields) {
        if (error) throw error;
        // res.send(results);
        var data = results;
        var arr = [];
        conncetion.query(sql_select2,function (error, results, fields) {
            if (error) throw error;
            arr = [data,results];
            res.send(arr);
        });
    });
});

module.exports = router;
