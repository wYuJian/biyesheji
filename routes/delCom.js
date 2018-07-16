var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/delCom', function(req, res, next) {
    var conncetion = mysql.conn();
    var sql_del =`DELETE FROM onlinestore.complaints 
	WHERE
	id = '${req.body.id}';`;
    conncetion.query(sql_del,function(error, results, fields){
        if (error) throw error;
        if(results.affectedRows == 1){
            res.send({'code':true})
        }else{
            res.send({'code':false});
        }

    })
});
module.exports = router;
