var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull');

/* GET users listing. */
router.post('/up_goods_status', function(req, res, next) {
    var connection = mysql.conn();

    var sql_update=`UPDATE onlinestore.product 
	SET
	product_status = '${req.body.goodsStatus}'
	WHERE
	product_id = '${req.body.productId}';`

    connection.query(sql_update,function (error, results, fields) {
        if (error) throw error;
        if(results.changedRows=1){
            res.send({"code":true});
        }else{
            res.send({"code":false});
        }

    });
});
module.exports = router;
