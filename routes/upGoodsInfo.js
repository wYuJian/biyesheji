var express = require('express');
var router = express.Router();
var formidable = require('formidable');
util = require('util');
var mysql = require('../uitl/mysqlfull');

/* GET users listing. */
router.post('/upGoodsInfo', function(req, res, next) {
    var form =  new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir="public/images/";// 设置文件上传路径
    form.parse(req,function (err, fields, files) {

        var img_path = files.img_upload.path;
        var img_path2 = files.img_upload2.path;
        img_path = img_path.replace(/\\/g, '\\\\');
        img_path2 = img_path2.replace(/\\/g, '\\\\');
        sql_exe(fields,res,img_path,img_path2)// 在此回调函数中才能得到文件上传的路径
    })
});
function sql_exe(fields,res,img_path,img_path2){
    var connection = mysql.conn();
    var sql_update='';
    if(img_path.endsWith('.jpg') == true || img_path.endsWith('.png') == true){
        if(img_path2.endsWith('.jpg') == true || img_path2.endsWith('.png') == true){
            sql_update=`UPDATE onlinestore.product 
	SET
	product_name = '${fields.product_name}' , 
	product_price = '${fields.product_price}' , 
	product_stock = '${fields.product_stock}' , 
	product_desc = '${fields.product_desc}' , 
	product_mainimg = '${img_path}' , 
	product_img = '${img_path2}' , 
	product_brand = '${fields.product_brand}' , 
	product_origin = '${fields.product_origin}' , 
	product_taste = '${fields.product_taste}' , 
	product_weight = '${fields.product_weight}' , 
	product_method = '${fields.product_method}' , 
	product_date = '${fields.product_date}' , 
	product_shelflife = '${fields.product_shelflife}' , 
	product_storage = '${fields.product_storage}'
	WHERE
	product_id = '${fields.product_id}' ;`;
        }else{
            sql_update=`UPDATE onlinestore.product 
	SET
	product_name = '${fields.product_name}' , 
	product_price = '${fields.product_price}' , 
	product_stock = '${fields.product_stock}' , 
	product_desc = '${fields.product_desc}' , 
	product_mainimg = '${img_path}' , 
	product_brand = '${fields.product_brand}' , 
	product_origin = '${fields.product_origin}' , 
	product_taste = '${fields.product_taste}' , 
	product_weight = '${fields.product_weight}' , 
	product_method = '${fields.product_method}' , 
	product_date = '${fields.product_date}' , 
	product_shelflife = '${fields.product_shelflife}' , 
	product_storage = '${fields.product_storage}' 
	WHERE
	product_id = '${fields.product_id}' ;`;
        }
    }else{
        if(img_path2.endsWith('.jpg') == true || img_path2.endsWith('.png') == true ){
            sql_update=`UPDATE onlinestore.product 
	SET
	product_name = '${fields.product_name}' , 
	product_price = '${fields.product_price}' , 
	product_stock = '${fields.product_stock}' , 
	product_desc = '${fields.product_desc}' , 
	product_img = '${img_path2}' , 
	product_brand = '${fields.product_brand}' , 
	product_origin = '${fields.product_origin}' , 
	product_taste = '${fields.product_taste}' , 
	product_weight = '${fields.product_weight}' , 
	product_method = '${fields.product_method}' , 
	product_date = '${fields.product_date}' , 
	product_shelflife = '${fields.product_shelflife}' , 
	product_storage = '${fields.product_storage}' 
	WHERE
	product_id = '${fields.product_id}' ;`;
        }else{
            sql_update=`UPDATE onlinestore.product 
	SET
	product_name = '${fields.product_name}' , 
	product_price = '${fields.product_price}' , 
	product_stock = '${fields.product_stock}' , 
	product_desc = '${fields.product_desc}' , 
	product_brand = '${fields.product_brand}' , 
	product_origin = '${fields.product_origin}' , 
	product_taste = '${fields.product_taste}' , 
	product_weight = '${fields.product_weight}' , 
	product_method = '${fields.product_method}' , 
	product_date = '${fields.product_date}' , 
	product_shelflife = '${fields.product_shelflife}' , 
	product_storage = '${fields.product_storage}'
	WHERE
	product_id = '${fields.product_id}' ;`;
        }
    }
    // console.log(sql_update);
   connection.query(sql_update,function(error, results, fields){
       if (error) throw error;
       res.send("insert is success");
   })
    connection.end();
}
module.exports = router;
