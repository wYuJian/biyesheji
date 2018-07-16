var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/goodslist', function(req, res, next) {
    var conncetion = mysql.conn();
    console.log(req.body.productId)
    var sql_select= `SELECT *
	FROM 
	onlinestore.product;`;
    if(req.body.status == 0 || req.body.status == 1){
        sql_select = `SELECT *
	FROM 
	onlinestore.product where product_status = '${req.body.status}';`
    }
    if(req.body.productId != undefined){
        console.log(1)
        sql_select = `SELECT *
	FROM 
	onlinestore.product where product_id = '${req.body.productId}';`
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
