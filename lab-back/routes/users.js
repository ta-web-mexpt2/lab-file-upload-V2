var express = require("express");
var router = express.Router();
const uploadCloud = require('../helpers/cloudinary.js')
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup",  uploadCloud.single("avatar"), (req, res, next) => {
  
  const { password, ...userValues } = req.body;
  const avatarUrl = req.file.url;
  const avatarName = req.file.originalname;
  const newUser = new user({username, email, password, avatarUrl, avatarName })

  bcrypt.hash(password, 10).then((hashedPassword) => {
    const user = { ...userValues, password: hashedPassword,avatar };
    User.create(newUser)
      .then(() => {
        res.status(201).json({ msg: "Usuario creado con éxto" });
      })
      .catch((err) => res.status(400).json(err));
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then((user) => {
    if (user === null) return res.status(404).json({ msg: "Email no existe" });

    bcrypt.compare(password, user.password).then((match) => {
      if (match) {
        const userObject = user.toObject();
        delete userObject.password;
        const token = jwt.sign({ id: user._id }, process.env.SECRET, {
          expiresIn: "1d",
        });
        res
          .cookie("token", token, {
            expires: new Date(Date.now() + 86400000),
            secure: false,
            httpOnly: true,
          })
          .json({ user: userObject });
      }
    });
  });
});
router.post("/logout", (req, res) => {
  res.clearCookie("token").json({ msg: "logout" });
});

module.exports = router;