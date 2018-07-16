var express = require('express');
var mysql = require('../uitl/mysqlfull')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req)
    var conncetion = mysql.conn();
    var sql_query = `SELECT *
	FROM 
	onlinestore.product where product_id='${req.query.product_id}' ;`;
    conncetion.query(sql_query,function (error, results, fields) {
        if(error) throw  error;
            res.render('add2Cart', { product_id: results[0].product_id,
                product_name: results[0].product_name,
                product_price: results[0].product_price,
                product_desc: results[0].product_desc,
                product_mainimg: results[0].product_mainimg.substring(6)
            });
    })

    var sql_insert =
      `
INSERT INTO onlinestore.cart 
	(
	product_id,
	product_num,
	user_name
	)
	VALUES
	(
	${req.query.product_id},
	${req.query.product_num},
	'${req.query.username}'
	);
    `;
    conncetion.query(sql_insert,function (error, results, fields) {
        if(error) throw  error;
    })
    conncetion.end();
});

module.exports = router;
