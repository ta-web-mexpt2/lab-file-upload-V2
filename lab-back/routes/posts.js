const express = require("express");
const router = express.Router();
const uploader = require("../helpers/cloudinary");
const { veryToken } = require("../helpers/auth");
const Posts = require("../models/Posts")

router.get('/all', (req,res)=>{
  Posts.find()
  .then(posts=>{
    res.json({posts})
  })
  .catch(error =>{
    res.json({msg:error.message})
  })
})

router.post('/create',uploader.single("img"), (req,res)=>{
  
  
  const {title,body} = req.body
  const img = req.file.path//la imagen la toma desde el req, no del body

console.log(req.body)
  Posts.create({
    title,
    body,
    img
  })
  .then(post=>{
res.status(201).json(post)
  })
  .catch(error=>{
    res.json({msg:error.msg})
  })
})

router.delete("/delete/:id", (req,res)=>{
  const {id} = req.params
  Posts.findByIdAndRemove(id)
  .then(()=>{
    res.json({msg:"Post deleted"})
  })
  .catch(error=>{
    res.json({msg:error.msg})
  })
})

/* router.post("/", veryToken, uploader.single("picPath"), (req, res) => {
    const { _id: creatorId } = req.user;
    const picPath = req.file.path;
    Posts.create({ ...req.body, creatorId, picPath })
      .then((post) => {
        res.status(201).json({ result: post });
      })
      .catch((err) => res.status(400).json(err));
  }); */

module.exports = router;