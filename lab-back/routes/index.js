const express = require('express');
const router = express.Router();
const uploader = require("../helpers/cloudinary");

router.get('/',(req,res,body)=>{
    res.json({msg:"Si jala"})
})

router.post('/upload-image', uploader.single('img'),
(req,res)=>{

    console.log(req.file)
    res.json({msg:"Imagen subida "})
})

module.exports = router