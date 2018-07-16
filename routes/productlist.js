var express = require('express');
var mysql = require('../uitl/mysqlfull')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var conncetion = mysql.conn();
    var sql_query = `SELECT *
	FROM 
	onlinestore.product where species_type='${req.query.product_type}' and product_status =1 ;`;
    if(req.query.product_type=='all'){
        sql_query=`SELECT *
	FROM 
	onlinestore.product where product_status =1;`;
    }
    conncetion.query(sql_query,function (error, results, fields) {
        if(req.query.product_type=='all'){
            res.render('productlist',{product_list:results,
                product_species:'所有商品'});
        }else {
            res.render('productlist',{product_list:results,
                product_species:results[0].product_species});
        }
    })

});

module.exports = router;
