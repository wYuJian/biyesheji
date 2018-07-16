var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var signin = require('./routes/signin');
var admin = require('./routes/admin');
var manager_product_add = require('./routes/manager_product_add');
var manager_product_query = require('./routes/manager_product_query');
var product_detail = require('./routes/product_detail');
var add2Cart = require('./routes/add2Cart');
var cart = require('./routes/cart');
var cartProduct_delete = require('./routes/cartProduct_delete');
var cartnum = require('./routes/cartnum');
var storeIndex = require('./routes/storeIndex');
var index_today_new_product = require('./routes/index_today_new_product');
var allOrder = require('./routes/order/allOrder');
var payOrder = require('./routes/order/payOrder');
var waitOrder = require('./routes/order/waitOrder');
var completeOrder = require('./routes/order/completeOrder');
var userCenter = require('./routes/userCenter');
var information = require('./routes/information');
var information_updata = require('./routes/information_updata');
var pwd_up = require('./routes/pwd_up');
var message = require('./routes/message');
var complaints = require('./routes/complaints');
var collection = require('./routes/collection');
var collection_del = require('./routes/collection_del');
var delivery = require('./routes/delivery');
var delivery_updata = require('./routes/delivery_updata');
var productlist = require('./routes/productlist');
var comment = require('./routes/comment');
var userlist = require('./routes/userlist');
var usereditor = require('./routes/usereditor');
var up_user_status = require('./routes/up_user_status');
var userEditor_up_pwd = require('./routes/userEditor_up_pwd');
var userEditorUpData = require('./routes/userEditorUpData');
var goodslist = require('./routes/goodslist');
var goodsSuccess = require('./routes/goodsSuccess');
var up_goods_status = require('./routes/up_goods_status');
var upGoodsInfo = require('./routes/upGoodsInfo');
var addGoods = require('./routes/addGoods');
var orderlist = require('./routes/orderlist');
var orderSuccess = require('./routes/orderSuccess');
var setShipNumber = require('./routes/setShipNumber');
var userComSuccess = require('./routes/userComSuccess');
var upComStatus = require('./routes/upComStatus');
var delCom = require('./routes/delCom');
var delMes = require('./routes/delMes');
var upMesStatus = require('./routes/upMesStatus');
var messageSuccess = require('./routes/messageSuccess');
var insertCollect = require('./routes/insertCollect');
var now2buy = require('./routes/now2buy');
var buy = require('./routes/buy');
var yanzhengpaypwd = require('./routes/yanzhengpaypwd');
var up_cartNum = require('./routes/up_cartNum');
var cookies = require('./routes/cookies');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/userCenter', userCenter);
app.use('/product_detail', product_detail);
app.use('/cart', cart);
app.use('/productlist', productlist);
app.use('/storeIndex',storeIndex);
app.use('/index_today_new_product',index_today_new_product);
app.post('/login',login);
app.post('/signin',signin);
app.post('/admin',admin);
app.post('/manager_product_add',manager_product_add);
app.post('/manager_product_add',manager_product_add);
app.post('/cartProduct_delete',cartProduct_delete);
app.post('/manager_product_query',manager_product_query);
app.post('/information',information);
app.post('/information_updata',information_updata);
app.post('/pwd_up',pwd_up);
app.post('/message',message);
app.post('/complaints',complaints);
app.post('/collection',collection);
app.post('/collection_del',collection_del);
app.post('/delivery',delivery);
app.post('/delivery_updata',delivery_updata);
app.post('/comment',comment);
app.post('/userlist',userlist);
app.post('/usereditor',usereditor);
app.post('/up_user_status',up_user_status);
app.post('/userEditor_up_pwd',userEditor_up_pwd);
app.post('/userEditorUpData',userEditorUpData);
app.post('/goodslist',goodslist);
app.post('/goodsSuccess',goodsSuccess);
app.post('/up_goods_status',up_goods_status);
app.post('/upGoodsInfo',upGoodsInfo);
app.post('/addGoods',addGoods);
app.post('/orderlist',orderlist);
app.post('/orderSuccess',orderSuccess);
app.post('/setShipNumber',setShipNumber);
app.post('/userComSuccess',userComSuccess);
app.post('/upComStatus',upComStatus);
app.post('/delCom',delCom);
app.post('/delMes',delMes);
app.post('/upMesStatus',upMesStatus);
app.post('/messageSuccess',messageSuccess);
app.post('/insertCollect',insertCollect);
app.post('/buy',buy);
app.post('/yanzhengpaypwd',yanzhengpaypwd);
app.post('/up_cartNum',up_cartNum);
app.post('/cookies',cookies);
app.use('/order/waitOrder',waitOrder);
app.use('/order/payOrder',payOrder);
app.use('/order/allOrder',allOrder);
app.use('/order/completeOrder',completeOrder);
app.use('/add2Cart',add2Cart);
app.use('/now2buy',now2buy);

app.post('/cartnum',cartnum);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
