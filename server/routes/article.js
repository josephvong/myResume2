var express = require('express') 
var router = express.Router();

var Article = require('../models/article')

router.post('/article_post',(req,res)=>{ 
  var newArticle = new Article({
    art_id:req.body.art_id,
    title:req.body.title, 
    content:req.body.content,
    thumb:req.body.thumb,
    time:req.body.time
  })
  newArticle.save(function(err){
    if(err){ res.json({ success:false,  message:'注册失败' }) }  

    res.json({
      success:true,
      message:'发布成功' 
    })
  })
})


router.get('/article_all',(req,res)=>{
  Article.find({},(err,articles)=>{
    let detailList = articles.map((item)=>{
      return {
        title:item.title,
        art_id:item.art_id,
        thumb:item.thumb,
        time:item.time
      }
    }) 
    res.json({ articles:detailList })
  })
})
router.get('/article_d_all',(req,res)=>{
  Article.remove({},()=>{
    res.json({ success:true })
  })
})   

module.exports = router