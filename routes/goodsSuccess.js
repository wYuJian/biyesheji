var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/goodsSuccess', function(req, res, next) {
    var conncetion = mysql.conn();
    // console.log(req.query.password);
    var sql_select= `SELECT *
	FROM 
	onlinestore.product where product_name like '%${req.body.txt}%';`;
    conncetion.query(sql_select,function(error, results, fields){
        if (error) throw error;
        if(results.length>0){
            res.send(results);
        }else{
            res.send({'code':false});
        }

    })
});
module.exports = router;
