var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/collection_del', function(req, res, next) {
    var conncetion = mysql.conn();
    // console.log(req.query.username);
    // console.log(req.query.password);
    var sql_delete=`
  DELETE FROM onlinestore.collection 
	WHERE
	product_id = ${req.body.product_id} ;
  `;
    // console.log(sql_delete);
    conncetion.query(sql_delete,function (error, results, fields) {
        if (error) throw error;
        res.send('删除成功！');
        // console.log();
    });
    conncetion.end();
});
module.exports = router;
