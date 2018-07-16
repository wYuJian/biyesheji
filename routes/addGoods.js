var express = require('express');
var router = express.Router();
var formidable = require('formidable');
util = require('util');
var mysql = require('../uitl/mysqlfull');

/* GET users listing. */
router.post('/addGoods', function(req, res, next) {
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
    var speciesType='' ;
    switch (fields.product_species){
        case '蜜饯果干':
            speciesType = 'f01';
            break;
        case '饼干糕点':
            speciesType = 'f02';
            break;
        case '膨化零食':
            speciesType = 'f03';
            break;
        case '肉类制品':
            speciesType = 'f04';
            break;
        case '糖果巧克力':
            speciesType = 'f05';
            break;
        case '海味零食':
            speciesType = 'f06';
            break;
        case '坚果炒货':
            speciesType = 'f07';
            break;
    }
    // console.log(speciesType);
    var sql_insert='';
    if(img_path.endsWith('.jpg') == true || img_path.endsWith('.png') == true){
        if(img_path2.endsWith('.jpg') == true || img_path2.endsWith('.png') == true){
            sql_insert=`
INSERT INTO onlinestore.product 
	(
	product_name, 
	product_price, 
	product_stock, 
	product_desc, 
	product_mainimg, 
	product_img, 
	product_brand, 
	product_origin, 
	product_taste, 
	product_weight, 
	product_species, 
	product_method, 
	product_date, 
	product_shelflife, 
	product_storage, 
	species_type
	)
	VALUES
	( 
	'${fields.product_name}', 
	'${fields.product_price}', 
	'${fields.product_stock}', 
	'${fields.product_desc}', 
	'${img_path}', 
	'${img_path2}', 
	'${fields.product_brand}', 
	'${fields.product_origin}', 
	'${fields.product_taste}', 
	'${fields.product_weight}', 
	'${fields.product_species}', 
	'${fields.product_method}', 
	'${fields.product_date}', 
	'${fields.product_shelflife}', 
	'${fields.product_storage}', 
	'${speciesType}'
	);`;
        }else{
            sql_insert=`
INSERT INTO onlinestore.product 
	(
	product_name, 
	product_price, 
	product_stock, 
	product_desc, 
	product_mainimg, 
	product_brand, 
	product_origin, 
	product_taste, 
	product_weight, 
	product_species, 
	product_method, 
	product_date, 
	product_shelflife, 
	product_storage, 
	species_type
	)
	VALUES
	( 
	'${fields.product_name}', 
	'${fields.product_price}', 
	'${fields.product_stock}', 
	'${fields.product_desc}', 
	'${img_path}', 
	'${fields.product_brand}', 
	'${fields.product_origin}', 
	'${fields.product_taste}', 
	'${fields.product_weight}', 
	'${fields.product_species}', 
	'${fields.product_method}', 
	'${fields.product_date}', 
	'${fields.product_shelflife}', 
	'${fields.product_storage}', 
	'${speciesType}'
	);`;
        }
    }else{
        if(img_path2.endsWith('.jpg') == true || img_path2.endsWith('.png') == true ){
            sql_insert=`
INSERT INTO onlinestore.product 
	(
	product_name, 
	product_price, 
	product_stock, 
	product_desc, 
	product_img, 
	product_brand, 
	product_origin, 
	product_taste, 
	product_weight, 
	product_species, 
	product_method, 
	product_date, 
	product_shelflife, 
	product_storage, 
	species_type
	)
	VALUES
	( 
	'${fields.product_name}', 
	'${fields.product_price}', 
	'${fields.product_stock}', 
	'${fields.product_desc}', 
	'${img_path2}', 
	'${fields.product_brand}', 
	'${fields.product_origin}', 
	'${fields.product_taste}', 
	'${fields.product_weight}', 
	'${fields.product_species}', 
	'${fields.product_method}', 
	'${fields.product_date}', 
	'${fields.product_shelflife}', 
	'${fields.product_storage}', 
	'${speciesType}'
	);`;
        }else{
            sql_insert=`
INSERT INTO onlinestore.product 
	(
	product_name, 
	product_price, 
	product_stock, 
	product_desc, 
	product_brand, 
	product_origin, 
	product_taste, 
	product_weight, 
	product_species, 
	product_method, 
	product_date, 
	product_shelflife, 
	product_storage, 
	species_type
	)
	VALUES
	( 
	'${fields.product_name}', 
	'${fields.product_price}', 
	'${fields.product_stock}', 
	'${fields.product_desc}', 
	'${fields.product_brand}', 
	'${fields.product_origin}', 
	'${fields.product_taste}', 
	'${fields.product_weight}', 
	'${fields.product_species}', 
	'${fields.product_method}', 
	'${fields.product_date}', 
	'${fields.product_shelflife}', 
	'${fields.product_storage}', 
	'${speciesType}'
	);`;
        }
    }
    // console.log(sql_insert);
   connection.query(sql_insert,function(error, results, fields){
       if (error) throw error;
       res.send("insert is success");
   })
    connection.end();
}
module.exports = router;
