var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/collection', function(req, res, next) {
    var conncetion = mysql.conn();
    // console.log(req.query.username);
    // console.log(req.query.password);
    var sql_select_username = `SELECT *
	FROM 
	onlinestore.collection where username = '${req.body.username}';`;
    conncetion.query(sql_select_username,function(error, results, fields){
        if (error) throw error;
        if(results.length>0){
                var sql_select_product = `SELECT  product_id,product_price,product_name,product_mainimg
	FROM 
	onlinestore.product 
	where product_id in (select product_id from onlinestore.collection where username='${req.body.username}');`;
                conncetion.query(sql_select_product,function(error, results, fields){
                    if (error) throw error;
                    var results = JSON.stringify(results);
                   res.send(results);
                })
        }else{
            res.send('{"code":false}')
        }
    })
});
module.exports = router;
