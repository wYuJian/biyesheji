var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/up_cartNum', function(req, res, next) {
  var conncetion = mysql.conn();
    var sql_update=`UPDATE onlinestore.cart 
	SET
	product_num = ${req.body.productNum}
	WHERE user_name='${req.body.username}' and product_id = '${req.body.productId}';`;
    conncetion.query(sql_update,function (error, results, fields) {
        if (error) throw error;
        res.send(results);
        // console.log(results);
    })
});
module.exports = router;
