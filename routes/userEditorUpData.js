var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull');

/* GET users listing. */
router.post('/userEditorUpData', function(req, res, next) {
    var connection = mysql.conn();

    var sql_update=`UPDATE onlinestore.users 
	SET 
	phonenum = '${req.body.phone}' , 
	user_address = '${req.body.address}' , 
	user_sex = '${req.body.sex}' , 
	user_qq = '${req.body.tQQ}' , 
	user_famil_phone = '${req.body.familPhone}' , 
	user_email = '${req.body.email}' 
	WHERE
	username = '${req.body.username}' ;`;

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
