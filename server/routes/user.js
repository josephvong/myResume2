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
  if(!req.body.name || !req.body.password){res.json({success:false,message:'注册失败'});return}
  User.findOne({name:req.body.name},(err,user)=>{
    if(err){res.json({success:false,message:'注册失败'})}
    if(!user){
      var newOne = new User({
        name:req.body.name,
        password:req.body.password,
        role:req.body.role
      }) 
      newOne.save(function(err){
        if(err){ res.json({ success:false,  message:'注册失败' }) } 
        
        var token = jwt.sign({// 创建token
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
    }else{
      res.json({ success:false,  message:'用户已存在' })
    }
  })
})

router.get('/findAll',(req,res)=>{
  User.find({},(err,users)=>{
    res.json({ users:users })
  })
})
router.get('/removeAll',(req,res)=>{
  User.remove({},()=>{
    res.json({ success:true })
  })
})    
module.exports = router