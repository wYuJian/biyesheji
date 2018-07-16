/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.5.40 : Database - onlinestore
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`onlinestore` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `onlinestore`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `admin` */

insert  into `admin`(`id`,`name`,`password`) values (1,'admin','21232f297a57a5a743894a0e4a801fc3');

/*Table structure for table `cart` */

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(255) NOT NULL,
  `product_num` int(100) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

/*Data for the table `cart` */

insert  into `cart`(`id`,`product_id`,`product_num`,`user_name`) values (24,1013,1,'test'),(25,1014,1,'test'),(26,1014,1,'test'),(27,1014,1,'test'),(28,1014,1,'test'),(29,1014,1,'test'),(30,1014,1,'test'),(31,1014,1,'test'),(32,1014,1,'test'),(33,1014,1,'test'),(34,1014,1,'test'),(35,1014,1,'test'),(36,1014,1,'test'),(37,1014,1,'test'),(38,1014,1,'test'),(39,1014,1,'test'),(40,1014,1,'test'),(41,1014,1,'test'),(42,1014,1,'test'),(43,1014,1,'test'),(44,1014,1,'test'),(45,1013,1,'1234'),(46,2018,1,'test'),(47,2037,1,'qqq');

/*Table structure for table `collection` */

DROP TABLE IF EXISTS `collection`;

CREATE TABLE `collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(255) NOT NULL,
  `username` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

/*Data for the table `collection` */

insert  into `collection`(`id`,`product_id`,`username`) values (21,'1015','test'),(22,'1014','test'),(23,'1016','test'),(24,'2021','1234'),(25,'1016','qqq');

/*Table structure for table `comment` */

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(255) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `comment_content` varchar(255) DEFAULT '好评!',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `comment` */

/*Table structure for table `complaints` */

DROP TABLE IF EXISTS `complaints`;

CREATE TABLE `complaints` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `com_type` varchar(20) NOT NULL,
  `com_subject` varchar(255) NOT NULL,
  `com_content` varchar(255) NOT NULL,
  `com_phone` varchar(100) NOT NULL,
  `com_status` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `complaints` */

/*Table structure for table `delivery` */

DROP TABLE IF EXISTS `delivery`;

CREATE TABLE `delivery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `user_province` varchar(255) DEFAULT ' ',
  `user_city` varchar(255) DEFAULT ' ',
  `user_town` varchar(255) DEFAULT ' ',
  `user_address` varchar(255) NOT NULL DEFAULT '建议您如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息',
  `user_recipients` varchar(100) NOT NULL DEFAULT '长度不超过25个字符',
  `user_phone` varchar(100) NOT NULL DEFAULT '固定电话、手机号码必须填一项',
  `user_fixedphone` varchar(100) DEFAULT ' ',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `delivery` */

insert  into `delivery`(`id`,`user_name`,`user_province`,`user_city`,`user_town`,`user_address`,`user_recipients`,`user_phone`,`user_fixedphone`) values (1,'test','广东','珠海市','斗门区','广东珠海市斗门区111驱蚊器','1111','11111',''),(2,'1234',NULL,NULL,NULL,'建议您如实填写详细收货地址，例如街道名称，门牌号码，楼层和房间号等信息！','长度不超过25个字符','固定电话、手机号码必须填一项',NULL),(3,'qqq','福建','漳州市','诏安县','福建漳州市诏安县鲤城区媒人桥路2号','111','12213214214',' ');

/*Table structure for table `message` */

DROP TABLE IF EXISTS `message`;

CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `message_content` varchar(255) DEFAULT NULL,
  `message_type` varchar(255) DEFAULT NULL,
  `message_subject` varchar(255) NOT NULL,
  `message_phone` varchar(100) DEFAULT NULL,
  `message_status` int(2) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `message` */

/*Table structure for table `order` */

DROP TABLE IF EXISTS `order`;

CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) DEFAULT NULL,
  `order_money` int(100) DEFAULT NULL,
  `order_state` char(1) DEFAULT '1',
  `product_id` int(11) DEFAULT NULL,
  `order_id` varchar(255) DEFAULT NULL,
  `product_num` int(11) DEFAULT NULL,
  `province` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `town` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `recipients` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT ' ',
  `fixedphone` varchar(100) DEFAULT ' ',
  `shipnumber` varchar(255) DEFAULT ' ',
  `order_ship` int(4) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `order` */

insert  into `order`(`id`,`user_name`,`order_money`,`order_state`,`product_id`,`order_id`,`product_num`,`province`,`city`,`town`,`address`,`recipients`,`phone`,`fixedphone`,`shipnumber`,`order_ship`) values (1,'qqq',5,'1',2037,'2017122421614199',1,'福建','漳州市','诏安县','福建漳州市诏安县鲤城区媒人桥路2号','111','12213214214',' ','1121321324345463234',1);

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `product_id` int(255) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_price` varchar(255) NOT NULL,
  `product_stock` varchar(255) NOT NULL,
  `product_desc` varchar(255) DEFAULT ' ',
  `product_mainimg` varchar(255) DEFAULT NULL,
  `product_img` varchar(255) DEFAULT NULL,
  `product_brand` varchar(255) DEFAULT NULL,
  `product_origin` varchar(255) DEFAULT NULL,
  `product_taste` varchar(255) DEFAULT NULL,
  `product_weight` varchar(255) DEFAULT NULL,
  `product_sales` varchar(255) DEFAULT '0',
  `product_species` varchar(255) DEFAULT NULL,
  `product_method` varchar(255) DEFAULT NULL,
  `product_date` varchar(255) DEFAULT NULL,
  `product_shelflife` varchar(255) DEFAULT NULL,
  `product_storage` varchar(255) DEFAULT NULL,
  `species_type` varchar(100) DEFAULT NULL,
  `product_status` varchar(2) DEFAULT '1',
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2039 DEFAULT CHARSET=utf8;

/*Data for the table `product` */

insert  into `product`(`product_id`,`product_name`,`product_price`,`product_stock`,`product_desc`,`product_mainimg`,`product_img`,`product_brand`,`product_origin`,`product_taste`,`product_weight`,`product_sales`,`product_species`,`product_method`,`product_date`,`product_shelflife`,`product_storage`,`species_type`,`product_status`) values (1013,'春如四季奇异果干*265g 约6袋','11.50','99998','','public\\images\\upload_639ca1d1e2c6c8abfe4e1cdd6b4318fa.jpg','public\\images\\b.jpg','四季如春','浙江','原味','265','1113','蜜饯果干','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f01','1'),(1014,'我本满足原味肉松蛋卷225g','13.90','9998','','public\\images\\5088_thumb_P_1430288168497.jpg','public\\images\\1362380889.jpg','我本满足','广东','原味','225','1112','饼干糕点','打开即可食用','2017-06','9个月','请置于阴凉干燥处，避光保存。','f02','1'),(1015,'口口妙木糖醇苏打饼干香葱味*250g 约8袋','3.80','99999','','public\\images\\12368_thumb_P_1500209584967.jpg','public\\images\\121234.jpg','口口妙','河南','香葱味','250','888','饼干糕点','打开即可食用','2017-06','10个月','请置于阴凉干燥处，避光保存。','f02','1'),(1016,'卡夫奥利奥巧克力棒巧克力味*250g 约18袋','12.50','99999','','public\\images\\12721_thumb_P_1506664142929.jpg','public\\images\\11212.jpg','卡夫','上海','巧克力味','250','888','饼干糕点','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f02','1'),(1017,'渔米之湘劲辣鱼仔盐焗味*100g 约8小袋','5.50','9999','','public\\images\\12122_thumb_P_1497936894497.jpg','public\\images\\132145.jpg','渔米之乡','湖北','原味','100','123','海味零食','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f06','1'),(2018,'正龙香酥小黄鱼*100g 约4袋','6.50','9999','','public\\images\\12123_thumb_P_1497936926072.jpg','public\\images\\16546.jpg','正龙','浙江','香辣','100','6676','海味零食','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f06','1'),(2019,'全味道原味海苔20g','8.50','9999','','public\\images\\11811_thumb_P_1482394349244.jpg','public\\images\\1235621.jpg','全味道','韩国','原味','20','99','海味零食','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f06','1'),(2020,'亿莱旺碧根果*250g 约4袋','21.50','9998','','public\\images\\12603_thumb_P_1507714306020.jpg','public\\images\\b2.jpg','亿莱旺','江苏','原味','250','101','坚果炒货','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f07','1'),(2021,'芳草美仁盐焗南瓜子*250g 约11袋','9.80','99999','','public\\images\\12172_thumb_P_1498793270640.jpg','public\\images\\b3.jpg','芳草','江苏','随机','250','11111','坚果炒货','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f07','1'),(2022,'甘源酱汁牛肉味瓜子仁*250g 约21袋','8.50','99887','','public\\images\\12135_thumb_P_1507687931817.jpg','public\\images\\9091.jpg','甘源','广东','随机','250','7876','坚果炒货','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f07','1'),(2023,'淘豆蟹香豌豆*115g 约4袋','3.60','101','','public\\images\\12127_thumb_P_1497937040507.jpg','public\\images\\dadsa.jpg','淘豆','江苏','原味','115','95653','坚果炒货','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f07','1'),(2024,'百年树黑提*500g','35.00','8992','','public\\images\\12015_thumb_P_1495004851450.jpg','public\\images\\bdqdq.jpg','百年树','福建','原味','500','3213','坚果炒货','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f07','1'),(2025,'零度深林零度杨梅鲜辣味*275g 约7个','13.80','89888','','public\\images\\12726_thumb_P_1506669196791.jpg','public\\images\\dasgffk.jpg','零度深林','浙江','香辣味','275','3213','蜜饯果干','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f01','1'),(2026,'零度深林零度杨梅绿茶味*275g 约7个','13.80','11111','','public\\images\\12729_thumb_P_1506671476910.jpg','public\\images\\jgfd.jpg','零度深林','浙江','绿茶味','275','3213','蜜饯果干','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f01','1'),(2027,'万间果蔬脆马蹄荸荠*260g 约4包','11.00','12314','','public\\images\\12396_thumb_P_1507713824849.jpg','public\\images\\186543.jpg','万间果蔬','湖北','原味','260','3213','蜜饯果干','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f01','1'),(2028,'春如四季杏果干*100g 约2袋','3.80','23214','','public\\images\\12310_thumb_P_1500002342948.jpg','public\\images\\109437.jpg','春如四季','浙江','原味','100','213','蜜饯果干','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f01','1'),(2029,'乐事清新清爽薯片翡翠黄瓜味104g','7.50','12232','','public\\images\\4635_thumb_P_1430288204265.jpg','public\\images\\b1(88).jpg','乐事','上海','黄瓜味','104','455','膨化零食','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f03','1'),(2030,'海皇脆升升香脆薯条蜂蜜黄油味*250g 约11袋','16.50','8889','','public\\images\\12608_thumb_P_1504770687927.jpg','public\\images\\7654321.jpg','脆脆生','天津','黄油味','250','565','膨化零食','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f03','1'),(2031,'大同寿司烧海苔松饼60g','6.50','78787','','public\\images\\12650_thumb_P_1506045607586.jpg','public\\images\\09871.jpg','大同','台湾','海苔味','60','324','膨化零食','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f03','1'),(2032,'骥洋猪蹄*250g 约5袋','18.50','32909','','public\\images\\12296_thumb_P_1500435251312.jpg','public\\images\\ytrwe98765.jpg','骥洋','江苏','原味','250','7878','肉类制品','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f04','1'),(2033,'修文散装鸭舌香辣味*250g 约18袋','59.00','323423','','public\\images\\12308_thumb_P_1499822967050.jpg','public\\images\\hgfdfds.jpg','修文','浙江','香辣味','250','78','肉类制品','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f04','1'),(2034,'牧谣牛肉香辣味*200g 约6袋','25.60','234241','','public\\images\\12137_thumb_P_1498100461763.jpg','public\\images\\hhdddqw.jpg','牧谣','上海','香辣味','200','765','肉类制品','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f04','1'),(2035,'生和堂龟苓膏金银花味*250g 约7个','4.50','99999','','public\\images\\12731_thumb_P_1506663925308.jpg','public\\images\\b143432.jpg','生和堂','广东','银花味','250','656','糖果巧克力','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f05','1'),(2037,'贝欧宝玫瑰花瓣糖45g','4.90','89897','','public\\images\\12199_thumb_P_1499409585651.jpg','public\\images\\b09021.png','贝欧宝','广东','原味','45','655','糖果巧克力','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f05','1'),(2038,'一邦4g花卉系列*100g 约25个','2.50','9999','','public\\images\\12683_thumb_P_1506332971923.jpg','public\\images\\b974651.jpg','一邦','湖北','原味','100','123','糖果巧克力','打开即可食用','2017-06','12个月','请置于阴凉干燥处，避光保存。','f05','1');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT '     ',
  `password` varchar(255) NOT NULL DEFAULT '    ',
  `paypassword` varchar(255) NOT NULL DEFAULT '  ',
  `phonenum` varchar(100) NOT NULL DEFAULT '  ',
  `user_true_name` varchar(20) DEFAULT '   ',
  `user_address` varchar(255) DEFAULT '   ',
  `user_sex` varchar(10) DEFAULT '   ',
  `user_qq` varchar(255) DEFAULT '   ',
  `user_famil_phone` varchar(100) DEFAULT '   ',
  `user_email` varchar(255) DEFAULT '   ',
  `user_status` varchar(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`,`paypassword`,`phonenum`,`user_true_name`,`user_address`,`user_sex`,`user_qq`,`user_famil_phone`,`user_email`,`user_status`) values (15,'test','098f6bcd4621d373cade4e832627b4f6','098f6bcd4621d373cade4e832627b4f6','13123132003','   ','   ','   ','   ','   ','   ','0'),(18,'aaa','47bce5c74f589f4867dbd57e9ca9f808','47bce5c74f589f4867dbd57e9ca9f808','1111','   ','   ','   ','   ','   ','   ','1'),(19,'qqq','b2ca678b4c936f905fb82f2733f5297f','b2ca678b4c936f905fb82f2733f5297f','111','   ','   ','   ','   ','   ','   ','1');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
