var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull');

/* GET users listing. */
router.post('/information_updata', function(req, res, next) {
    var connection = mysql.conn();
    // console.log(req.body.password);
    // console.log(req.body.paypassword);
    var sql_update=`UPDATE onlinestore.users 
	SET
	phonenum = '${req.body.user_phone}' , 
	user_true_name = '${req.body.user_trueName}' , 
	user_address = '${req.body.user_address}' , 
	user_sex = '${req.body.user_sex}' , 
	user_qq = '${req.body.user_qq}' , 
	user_famil_phone = '${req.body.user_familyPhone}' , 
	user_email = '${req.body.user_em}'
	WHERE
	username = '${req.body.username}' ;`;

    connection.query(sql_update,function (error, results, fields) {
        if (error) throw error;
        if(results.changedRows=1){
            res.send('{"code":true}');
        }else{
            res.send('{"code":false}');
        }

    });
});
module.exports = router;
