var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull');

/* GET users listing. */
router.post('/pwd_up', function(req, res, next) {
    var connection = mysql.conn();
    console.log(req.body.username);
    var sql_select = `SELECT 	id
	FROM 
	onlinestore.users where username = '${req.body.username}'and password='${req.body.pwd}' `;
    var sql_update=`UPDATE onlinestore.users 
	SET
	password='${req.body.new_pwd}'
	WHERE
	username = '${req.body.username}'and password='${req.body.pwd}' ;`;
    connection.query(sql_select,function(error, results, fields){
        if (error) throw error;
        if(results.length>0){
            connection.query(sql_update,function(err,results1,fil){
                if (err) throw err;
                if(results1.changedRows>0){
                    res.send('{"code":true}');
                }
            })
        }else{
            res.send('{"code":false}');
        }
    })

});
module.exports = router;
