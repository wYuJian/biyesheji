var express = require('express');
var mysql = require('../uitl/mysqlfull')
var router = express.Router();

/* GET home page. */
router.post('/buy', function(req, res, next) {
    console.log(req)
    var conncetion = mysql.conn();
    var sql_insert = `INSERT INTO onlinestore.order 
	(
	user_name, 
	order_money, 
	product_id, 
	order_id, 
	product_num, 
	province, 
	city, 
	town, 
	address, 
	recipients, 
	phone, 
	fixedphone
	)
	VALUES
	(
	'${req.body.userName}',  
	'${req.body.orderMoney}', 
	'${req.body.productId}', 
	'${req.body.orderID}', 
	'${req.body.productNum}', 
	'${req.body.province}', 
	'${req.body.city}', 
	'${req.body.town}', 
	'${req.body.address}', 
	'${req.body.recipients}', 
	'${req.body.phone}', 
	'${req.body.fixedphone}'
	);`;
	var sql_select = `SELECT 	
	product_stock, 
	product_sales
	FROM 
	onlinestore.product WHERE product_id ='${req.body.productId}';`;

	var stock =0;
	var sales = 0;

	conncetion.query(sql_select,function(error, results, fields){
        if(error) throw  error;
        stock = parseInt(results[0].product_stock)  - parseInt(req.body.productNum);
        sales = parseInt(results[0].product_sales)  + parseInt(req.body.productNum);
        console.log(stock);
        console.log(sales);
        var sql_update = `UPDATE onlinestore.product 
		SET
		product_stock = ${stock} , 
		product_sales = ${sales}
		WHERE
		product_id = '${req.body.productId}' ;`;

		conncetion.query(sql_update,function(error, results, fields){
        	if(error) throw  error;
    	});
    });

	

    conncetion.query(sql_insert,function(error, results, fields){
        if(error) throw  error;
        res.send({"code":true});
    });
});

module.exports = router;
