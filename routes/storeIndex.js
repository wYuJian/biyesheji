var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.get('/', function(req, res, next) {
    var conncetion = mysql.conn();
    // console.log(req.query.username);
    // console.log(req.query.password);
    var sql_select=`SELECT *
	FROM 
	onlinestore.product where product_sales>=1000 and product_status = 1;`;
    conncetion.query(sql_select,function (error, results, fields) {
        if (error) throw error;
        // console.log(results)
        res.render('storeIndex',{product_list:results});
        // console.log();
    });

});
module.exports = router;
