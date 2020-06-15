const express = require("express");
const router = express.Router();
const uploader = require("../helpers/cloudinary");
const { veryToken } = require("../helpers/auth");
const Posts = require("../models/Posts");
const Comments = require("../models/Comments");

router.post("/", veryToken, uploader.single("picPath"), (req, res) => {
    const { _id: creatorId } = req.user;
    const picPath = req.file.path;
    Posts.create({ ...req.body, creatorId, picPath })
      .then((post) => {
        res.status(201).json({ result: post });
      })
      .catch((err) => res.status(400).json(err));
  });

  router.get("/index", (req, res) => {
    Posts.find().populate("creatorId", "username avatar").then(items => {
      // Una vez que tenemos los ítems, se regresan en la respuesta
      res.status(200).json(items);
    }).then(reason => console.log("Error: ", reason));
  });

  router.get("/:id", (req, res) => {
    const { id } = req.params;
    Posts.findById(id).then(found => {
      if (found) {
        Comments.find({ postId: id })
          .then((comments) => {
              if (comments) {
                // Aquí se puede convertir a objeto plano o agregar a ._doc
                  found._doc.comments = comments;
              }
              res.status(200).json(found);
          })
          .catch((err) => res.status(400).json(err));
      } else {
        res.status(400).json({ error: "Not found"})
      }
    }).catch(reason => {
      console.log("Error: ", reason);
      res.status(400).json({error: "Not found"});
    });
  })

module.exports = router;