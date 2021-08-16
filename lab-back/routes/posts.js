const express = require("express");
const router = express.Router();
const uploader = require("../helpers/cloudinary");
const { veryToken } = require("../helpers/auth");
const Posts = require("../models/Posts")

router.post("/", veryToken, uploader.single("picPath"), (req, res) => {
    const { _id: creatorId } = req.user;
    const picPath = req.file.path;
    Posts.create({ ...req.body, creatorId, picPath })
      .then((post) => {
        res.status(201).json({ result: post });
      })
      .catch((err) => res.status(400).json(err));
  });

  router.post('/upload-image', uploader.single('img'), (req, res)=>{
    console.log(req.file)
  })

module.exports = router;