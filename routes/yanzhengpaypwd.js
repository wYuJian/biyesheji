var express = require('express');
var mysql = require('../uitl/mysqlfull')
var router = express.Router();

/* GET home page. */
router.post('/yanzhengpaypwd', function(req, res, next) {
    console.log(req)
    var conncetion = mysql.conn();
    var sql_select = `
SELECT *
	FROM 
	onlinestore.users where username='${req.body.username}'and paypassword ='${req.body.paypwd}'
`;
    conncetion.query(sql_select,function(error, results, fields){
        if(error) throw  error;
        console.log(results.length)
        if(results.length>0){
            res.send({"code":true});
        }else{
            res.send({"code":false});
        }
    });
});

module.exports = router;
