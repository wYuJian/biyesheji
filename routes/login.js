var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull');

/* GET users listing. */
router.post('/login', function(req, res, next) {
  var connection = mysql.conn();
  // console.log(req.body.password);
  // console.log(req.body.paypassword);
    var paypwd = req.body.paypassword ;
    if(req.body.paypassword == undefined){
        paypwd = '';
    }
  var sql_insert=`
      INSERT INTO onlinestore.users 
	(
	username, 
	password, 
	paypassword,
	phonenum
	)
	VALUES
	(
    "${req.body.username}",     
	 "${req.body.password}", 
	 "${paypwd}",
	 "${req.body.phonenum}"
	);
  `;
  var sql_dev = `INSERT INTO onlinestore.delivery (user_name)VALUES("${req.body.username}")`;
  var sql_select=`SELECT * FROM onlinestore.users where username='${req.body.username}'`;
  connection.query(sql_select,function (error, results, fields) {
        if (error) throw error;
        if(results.length>0){
            res.send("用户名已存在!");
        }else{
            connection.query(sql_dev,function(error, results, fields){
              if (error) throw error;
            })
            connection.query(sql_insert,function (error, results, fields) {
                if (error) throw error;
                res.send('注册成功！');
            });
        }
        connection.end();
    });
});
module.exports = router;
