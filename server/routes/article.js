var express = require('express') 
var router = express.Router();

var Article = require('../models/article')
var Tags = require('../models/tags')

function tagSave(tags){
  return new Promise((resolve,reject)=>{ 
    for (var i = 0; i < tags.length; i++) {
      let nowTag = tags[i]
      Tags.findOne({tag_name:nowTag},(err,tag)=>{
        if(err){reject(err);return false}
        if(!tag){
          let newTag = new Tags({
            tag_name:nowTag
          })
          newTag.save()
        }
      }) 
    }
    resolve()
  })
}

router.post('/article_post',(req,res)=>{ 
  var newArticle = new Article({
    art_id:req.body.art_id,
    desc:req.body.desc,
    title:req.body.title, 
    content:req.body.content,
    thumb:req.body.thumb,
    time:req.body.time,
    tags:req.body.tags
  })

  tagSave(req.body.tags).then(()=>{
    newArticle.save(function(err){
      if(err){ res.json({ success:false,  message:'发布失败' }) }   
      res.json({
        success:true,
        message:'发布成功' 
      })
    })
  }).catch((err)=>{
    res.json({
      success:false,
      message:err
    })
  })

  
})


router.get('/article_all',(req,res)=>{
  Article.find({},(err,articles)=>{
    let detailList = articles.map((item)=>{
      return {
        title:item.title,
        desc:item.desc,
        art_id:item.art_id,
        thumb:item.thumb,
        time:item.time,
        tags:item.tags
      }
    }).reverse() 
    res.json({ articles:detailList })
  })
})

router.get('/article_d_all',(req,res)=>{
  Article.remove({},()=>{
    res.json({ success:true })
  })
})



//-------------------------标签获取 与 删除-----------------------------
router.get('/article_tags',(req,res)=>{
  Tags.find({},(err,tags)=>{
    res.json({ tags:tags })
  })
})

router.get('/article_d_tags',(req,res)=>{
  Tags.remove({},(err,tags)=>{
    res.json({ success:true })
  })
})    

module.exports = router