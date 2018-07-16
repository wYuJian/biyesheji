var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/admin', function(req, res, next) {
    var conncetion = mysql.conn();
    // console.log(req.query.username);
    // console.log(req.query.password);
    var sql_select=`SELECT *
    FROM onlinestore.admin where name='${req.body.name}'and password='${req.body.password}';`;
    conncetion.query(sql_select,function (error, results, fields) {
        if (error) throw error;
        if(results.length>0){
            res.send('{"code":true}');
        }else{
            res.send('{"code":false}');
        }

    });
    conncetion.end();
});

module.exports = router;
