var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull')
/* GET home page. */
router.post('/upMesStatus', function(req, res, next) {
    var conncetion = mysql.conn();
    var sql_updata =`
UPDATE onlinestore.message 
	SET
	message_status = '1'
	WHERE
	id = '${req.body.id}' ;
`;
    conncetion.query(sql_updata,function(error, results, fields){
        if (error) throw error;
        console.log(sql_updata)
        if(results.changedRows == 1){
            res.send({'code':true})
        }else{
            res.send({'code':false});
        }

    })
});
module.exports = router;
