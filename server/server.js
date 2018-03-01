var express = require('express')
var app = express();

var bodyParser = require('body-parser');
var morgan = require('morgan')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(morgan('dev')); 


//=============连接数据库================
var config = require('./config')
var port = process.env.PORT || 3000

var dburl = config.database
var mongoose = require('mongoose')
mongoose.connect(dburl)




/*app.get('/',function(req,res){
  res.send('myblog restful api')
})*/

//===============加密设置===============
var jwt =require('jsonwebtoken')
app.set('superSecret',config.secret)

//==================路由配置====================
var setupRouter = require('./routes/setup')
app.use('/api',setupRouter)

var userRouter = require('./routes/user')
app.use('/api',userRouter)

var infoRouter = require('./routes/info')
app.use('/api',infoRouter)

var articleRouter = require('./routes/article')
app.use('/api',articleRouter)

//================静态文件=====================
//app.use('/',express.static(__dirname+'/staticFile')) 
app.use('/',express.static('../dist'))
app.listen(port);
