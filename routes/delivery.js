var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/delivery', function(req, res, next) {
    var conncetion = mysql.conn();
    // console.log(req.query.username);
    // console.log(req.query.password);
    var sql_select=`SELECT *
    FROM
    onlinestore.delivery where user_name='${req.body.username}' ;`;
    conncetion.query(sql_select,function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
        // console.log();
    });
});
module.exports = router;