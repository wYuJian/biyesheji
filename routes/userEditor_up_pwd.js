var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull');

/* GET users listing. */
router.post('/userEditor_up_pwd', function(req, res, next) {
    var connection = mysql.conn();
    var sql_update=`UPDATE onlinestore.users 
	SET
	password='${req.body.new_pwd}'
	WHERE
	username = '${req.body.username}';`;
    connection.query(sql_update,function(err,results1,fil){
        if (err) throw err;
        if(results1.changedRows>0){
            res.send({"code":true});
        }else{
            res.send({"code":false});
        }
    })



});
module.exports = router;
