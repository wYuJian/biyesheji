var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull');
/* GET home page. */
router.post('/signin', function(req, res, next) {
  var conncetion = mysql.conn();
  // console.log(req.query.username);
  // console.log(req.query.password);
  var sql_select=`SELECT *
	FROM 
	onlinestore.users where username='${req.body.username}'and password='${req.body.password}' and user_status = 1;`;
    conncetion.query(sql_select,function (error, results, fields) {
        if (error) throw error;
        if(results.length>0){
            res.cookie('user',{username:req.body.username});
            res.send({"code":true})
            // res.send({"code":true,"username":req.cookies.user.username})
        }else{
          res.send({"code":false})
            // res.send({"code":false,"username":req.cookies.user.username});
        }
    });
});

module.exports = router;
