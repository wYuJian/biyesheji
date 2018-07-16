var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull');
/* GET home page. */
router.get('/', function(req, res, next) {
  var conncetion = mysql.conn();
  console.log(req.cookies.user.username)
  // console.log(req.query.username);
  // console.log(req.query.password);
  var sql_select=`SELECT *
	FROM 
	onlinestore.product where product_id in(select product_id from onlinestore.cart where user_name='${req.cookies.user.username}');`;
    conncetion.query(sql_select,function (error, results, fields) {
        if (error) throw error;
        res.render('cart',{product_list:results});
       // console.log();
    });
});
module.exports = router;
