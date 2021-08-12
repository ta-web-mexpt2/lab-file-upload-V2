const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    
    title:String,
    body:String,
    img:String,
    
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);