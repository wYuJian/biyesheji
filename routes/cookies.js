var express = require('express');
var router = express.Router();
/* GET home page. */
router.post('/cookies', function(req, res, next) {
    res.send(req.cookies.user);
});

module.exports = router;
