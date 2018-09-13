var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String,
  email: String,
  services: Array,
  firstname: String,
  lastname: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  text: Boolean,
  email: String,
  servicedate: {type: Date, default: Date.now},
  comments: String,
  cost: Number

});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
