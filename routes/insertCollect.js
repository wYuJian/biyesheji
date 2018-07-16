var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/insertCollect', function(req, res, next) {
    console.log(req.body.username)
    var conncetion = mysql.conn();
    var sql_insert = `
INSERT INTO onlinestore.collection 
	(
	product_id, 
	username
	)
	VALUES
	(
	'${req.body.productId}', 
	'${req.body.username}'
	);
`
    conncetion.query(sql_insert,function(error, results, fields){
        if (error) throw error;
        console.log(results)
        if(results.affectedRows ==1){
            res.send({'code':true});
        }else{
            res.send({'code':false});
        }
    })
});
module.exports = router;
