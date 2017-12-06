var express = require('express')
var app = express();
var router = express.Router();

var User = require('../models/user')
var jwt = require('jsonwebtoken')
var config = require('../config')
app.set('superSecret',config.secret)

router.post('/info',(req,res)=>{ 
  var userInfo = jwt.verify(req.body.token,app.get('superSecret'))
  res.json(userInfo) 
})
module.exports = router