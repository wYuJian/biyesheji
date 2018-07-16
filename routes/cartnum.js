var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/cartnum', function(req, res, next) {
  var conncetion = mysql.conn();
  console.log(req.body.product_id)
  // console.log(req.query.username);
  // console.log(req.query.password);
    var sql_select=`SELECT 	
	*
	FROM 
	onlinestore.cart`;
    conncetion.query(sql_select,function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
        // console.log(results);
    })
});
module.exports = router;
