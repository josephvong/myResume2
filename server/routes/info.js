var express = require('express')
var app = express();
var router = express.Router();

var User = require('../models/user')
var jwt = require('jsonwebtoken')
var config = require('../config')
app.set('superSecret',config.secret)

router.post('/info',(req,res)=>{
  if(!req.body.token){res.json({success:false, message:'信息获取失败'}); return} 
  var userInfo = jwt.verify(req.body.token,app.get('superSecret')) 

  if(!userInfo.name || !userInfo.password  ){ res.json({success:false, message:'信息获取失败'}); return }
  
  User.findOne({name:userInfo.name, password:userInfo.password},(err,user)=>{
    if(err){res.json({success:false,message:'信息获取失败'})}
    if(!user){
      res.json({success:false,message:'信息获取失败'})  
    }else{
      res.json(user)
    }
  }) 
})
module.exports = router