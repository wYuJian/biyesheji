var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/information', function(req, res, next) {
    var conncetion = mysql.conn();
    // console.log(req.query.password);
    var sql_select=`SELECT *
    FROM
    onlinestore.users where username='${req.body.username}' ;`;
    conncetion.query(sql_select,function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));

        // console.log();
    });
});
module.exports = router;