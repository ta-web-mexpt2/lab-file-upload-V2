const express = require("express");
const router = express.Router();
const uploader = require("../helpers/cloudinary");
const { veryToken } = require("../helpers/auth");
const Comments = require("../models/Comments");

// New comment on /posts/:id/comments
router.post("/:postId/comments/", veryToken, uploader.single("imagePath"), (req, res) => {
    console.log(req.params);
    const { postId } = req.params;
    const { _id: authorId } = req.user;
    const imagePath = req.file.path;
    Comments.create({ ...req.body, postId, authorId, imagePath })
      .then((comment) => {
        res.status(201).json({ result: comment });
      })
      .catch((err) => res.status(400).json(err));
  });

// Get comments on /posts/:id/comments
router.get("/:postId/comments/", veryToken, uploader.single("imagePath"), (req, res) => {
    const { postId } = req.params;
    Comments.find({ postId })
      .then((comments) => {
          if (comments) {
              res.status(201).json({ comments });
          } else {
              res.status(400).json({ message: "No hay comentarios"})
          }
      })
      .catch((err) => res.status(400).json(err));
  });

module.exports = router;