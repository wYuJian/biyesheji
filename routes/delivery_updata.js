var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull');

/* GET users listing. */
router.post('/delivery_updata', function(req, res, next) {
    var connection = mysql.conn();
    // console.log(req.body.password);
    // console.log(req.body.paypassword);
    var sql_update=`UPDATE onlinestore.delivery 
	SET
	user_province= '${req.body.province}' , 
	user_city = '${req.body.city}' , 
	user_town = '${req.body.town}' , 
	user_address = '${req.body.address}' , 
	user_recipients = '${req.body.recipients}' , 
	user_phone = '${req.body.phone}' , 
	user_fixedphone = '${req.body.fixedphone}'
	WHERE
	user_name = '${req.body.username}' ;`;
    console.log(sql_update)
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
