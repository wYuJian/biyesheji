var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/orderSuccess', function(req, res, next) {
    var conncetion = mysql.conn();
    var sql_select = `SELECT *
	FROM 
        onlinestore.order where order_id ='${req.body.orderId}';`;

    var sql_select2 = `SELECT *
        FROM
        onlinestore.product where product_id in (select product_id from onlinestore.order where order_id ='${req.body.orderId}' );`;

    conncetion.query(sql_select,function(error, results, fields){
        if (error) throw error;
        var data=results;
        var arr=[];
        if(results.length>0){
            conncetion.query(sql_select2,function(error, results, fields){
                if (error) throw error;
                arr=[data,results]
                res.send(arr);
            })
        }else{
            res.send({'code':false});
        }

    })
});
module.exports = router;
