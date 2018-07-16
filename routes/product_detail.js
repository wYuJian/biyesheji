var express = require('express');
var mysql = require('../uitl/mysqlfull')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var conncetion = mysql.conn();
    var sql_query = `SELECT *
	FROM 
	onlinestore.product where product_id='${req.query.product_id}' ;`;
    conncetion.query(sql_query,function (error, results, fields) {
        if(results.length>0){
            res.render('product_detail', { product_id: results[0].product_id,
                product_name: results[0].product_name,
                product_price: results[0].product_price,
                product_desc: results[0].product_desc,
                product_mainimg: results[0].product_mainimg.substring(6),
                product_img:results[0].product_img.substring(6),
                product_brand:results[0].product_brand,
                product_origin:results[0].product_origin,
                product_taste:results[0].product_taste,
                product_weight:results[0].product_weight,
                product_sales:results[0].product_sales,
                product_stock:results[0].product_stock,
                product_species:results[0].product_species,
                product_method:results[0].product_method,
                product_date:results[0].product_date,
                product_shelflife:results[0].product_shelflife,
                product_storage:results[0].product_storage
            });
        }else{
            res.render('product_detail',{product_name:"商品不存在!"});
        }

    })

});

module.exports = router;
