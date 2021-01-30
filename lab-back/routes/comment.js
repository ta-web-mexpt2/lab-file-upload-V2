const express = require("express");
const router = express.Router();
const uploader = require("../helpers/cloudinary");
const { veryToken } = require("../helpers/auth");
const Comments = require("../models/Comments")

router.post("/comment", veryToken, uploader.single("imageUrl"), (req, res) => {
    const { _id: authorId } = req.user;
    const imageUrl = req.file.path;
    Comments.create({ ...req.body, authorId, imageUrl })
      .then((comment) => {
        res.status(201).json({ result: comment });
      })
      .catch((err) => res.status(400).json(err));
  });

module.exports = router;