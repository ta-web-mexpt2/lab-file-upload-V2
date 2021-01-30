const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    
    content: {
      type: String,
      maxlength:60
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        required: [true, "Debes agregar un correo electrónico"],
        ref: "User",
      },
    picName: {
        type: String,
        required: [true, "Debes agregar que un nombre para tu post"],
    },
    picUrl:{
        type:String,
        required: [true, "Debes agregar una imagen para tu post"],
    }
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);