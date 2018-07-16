var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/manager_product_query', function(req, res, next) {
  var conncetion = mysql.conn();
  // console.log(req.query.username);
  // console.log(req.query.password);
  var sql_select=`SELECT *
	FROM 
	onlinestore.product;`;
    conncetion.query(sql_select,function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));

    });
});

module.exports = router;
