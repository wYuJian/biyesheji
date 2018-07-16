var express = require('express');
var router = express.Router();
var mysql = require('../uitl/mysqlfull');

/* GET users listing. */
router.post('/message', function(req, res, next) {
    var connection = mysql.conn();
    // console.log(req.body.password);
    // console.log(req.body.paypassword);
    var sql_insert=`
      INSERT INTO onlinestore.message 
	(
	username, 
	message_content, 
	message_type,
	message_subject,
	message_phone
	)
	VALUES
	(
    "${req.body.username}",     
	 "${req.body.mes_content}", 
	 "${req.body.mes_type}",
	 "${req.body.mes_subject}",
	 "${req.body.mes_phone}"
	);
  `;
        connection.query(sql_insert,function (error, results, fields) {
                if (error) throw error;
                    res.send('{"code":true}');
            });

});
module.exports = router;
