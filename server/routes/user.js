var express = require('express')
var app = express();
var User = require('../models/user')

var jwt = require('jsonwebtoken')
var config = require('../config')
app.set('superSecret',config.secret)

var router = express.Router();

router.post('/login',(req,res)=>{
  User.findOne({name:req.body.name},(err,user)=>{
    if(err){res.json({success:false,message:'登录失败'})}

    if(!user){
      res.json({success:false,message:'认证失败，无此用户'})
    }else{
      if(user.password != req.body.password){
        res.json({success:false,message:'认证失败，密码错误'})
      }else{
        var token = jwt.sign({
          name:req.body.name,
          password:req.body.password
        }, app.get('superSecret'))

        res.json({
          success:true,
          message:'登录成功', 
          token:token
        })
      }
    }
  })
})

router.post('/signin',(req,res)=>{ 
  var user = new User({
    name:req.body.name,
    password:req.body.password,
    role:req.body.role
  })

  user.save(function(err){
    if(err){
      res.json({
        success:false,
        message:'注册失败'
      })
    } 
    var token = jwt.sign({
      name:req.body.name,
      password:req.body.password,
      role:req.body.role
    }, app.get('superSecret'))

    res.json({
      success:true,
      message:'用户创建成功',
      token:token
    })
  })
})
module.exports = router