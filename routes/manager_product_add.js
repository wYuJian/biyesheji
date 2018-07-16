var express = require('express');
var mysql = require('../uitl/mysqlfull');
var formidable = require('formidable');
util = require('util');
var router = express.Router();

/* GET users listing. */
router.post('/manager_product_add', function(req, res, next) {
    var form =  new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir="public/images/";// 设置文件上传路径
    form.parse(req,function (err, fields, files) {
        var img_path = files.img_upload.path;
        img_path = img_path.replace(/\\/g, '\\\\')
        sql_exe(fields,res,img_path)// 在此回调函数中才能得到文件上传的路径
    })

});
function sql_exe(fields,res,img_path){
    var conncetion = mysql.conn();
    var sql_insert=`INSERT INTO onlinestore.product 
	(
	product_id,
	product_name,
	product_price,
	product_stock,
	product_desc,
	product_img
	)
	VALUES
	(
	 ${fields.product_id},
	'${fields.product_name}',
	'${fields.product_price}',
	'${fields.product_stock}',
	'${fields.product_desc}',
	'${img_path}'
	);`;
    console.log(sql_insert);
    conncetion.query(sql_insert,function (error, results, fields) {
        if (error) throw error;
        res.send("insert is success");
        // console.log(results);
    })
    conncetion.end();
}
module.exports = router;
