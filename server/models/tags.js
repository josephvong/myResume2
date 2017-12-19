var mongoose = require('mongoose')
var Schema = mongoose.Schema;

module.exports = mongoose.model("Tags",new Schema({
  tag_name:String,
  art_num:Number
}))