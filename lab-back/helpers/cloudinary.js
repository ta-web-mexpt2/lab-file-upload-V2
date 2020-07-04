// Este módulo en escencia exporta un "multer" pero ya con un storage pre-configurado con cloudinary 
// Recordar que multer es un middleware para manejo de peticiones multipart o de tipo formData (con multipart)
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDSECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "lab-uploader",
    use_filename: true,
  },
});

module.exports = multer({ storage });