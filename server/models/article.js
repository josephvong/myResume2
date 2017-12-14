var mongoose = require('mongoose')
var Schema = mongoose.Schema;

module.exports = mongoose.model("Article",new Schema({
  art_id:String,
  title:String,
  desc:String,
  content:String, 
  thumb:String,
  time:String,
  tags:Array
}))