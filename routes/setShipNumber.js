var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull');

/* GET users listing. */
router.post('/setShipNumber', function(req, res, next) {
    var connection = mysql.conn();
   var sql_update =`
UPDATE onlinestore.order 
	SET
	shipnumber = '${req.body.shipNumber}' , 
	order_ship = '1'
	WHERE
	order_id='${req.body.orderId}' ;`;
    connection.query(sql_update,function(error, results, fields){
        if (error) throw error;

        if(results.changedRows=1){
            res.send({'code':true});
        }else{
            res.send({'code':false});
        }
    })

});
module.exports = router;
