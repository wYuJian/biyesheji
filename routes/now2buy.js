var express = require('express');
var mysql = require('../uitl/mysqlfull')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log(req)
    var conncetion = mysql.conn();
    var sql_select = `SELECT *
	FROM 
	onlinestore.product where product_id='${req.query.product_id}';`;
    var sql_select_user = `SELECT id
	FROM 
	onlinestore.users where username='${req.query.user}';`;
    var sql_select_delivery =`
    SELECT *
	FROM 
	onlinestore.delivery where user_name='${req.query.user}'`;
    //查询收货地址
    var delivery;
    var goodInfo ;
    var userID;
    conncetion.query(sql_select_user,function (error, results, fields) {
        userID = results[0].id;
    })
    conncetion.query(sql_select_delivery,function (error, results, fields) {
        delivery = results;
    })
    //查询商品信息
    conncetion.query(sql_select,function (error, results, fields) {
        goodInfo =results;
        console.log(goodInfo.product_mainimg)
        res.render('buy',{
            productId:req.query.product_id,
            userName:req.query.user,
            userID:userID,
            goodImg:goodInfo[0].product_mainimg.substring(6),
            goodName:goodInfo[0].product_name,
            goodPrice:goodInfo[0].product_price,
            goodCount:req.query.product_num,
            total:((req.query.product_num)*(goodInfo[0].product_price)),
            province:delivery[0].user_province,
            city:delivery[0].user_city,
            town:delivery[0].user_town,
            address:delivery[0].user_address,
            phone:delivery[0].user_phone,
            fixedphone:delivery[0].user_fixedphone,
            recipients:delivery[0].user_recipients
        })
    })
});

module.exports = router;
