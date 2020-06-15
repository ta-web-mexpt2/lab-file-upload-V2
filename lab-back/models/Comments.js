const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      required: [true, "Debe estar indicado el Post del comentario"],
      ref: "Post"
    },
    content: {
      type: String,
      maxlength:60
    },
    authorId: {
        type: Schema.Types.ObjectId,
        required: [true, "Debes agregar un correo electrónico"],
        ref: "User",
      },
    imagePath:{
        type:String
    },
    imageName: {
        type: String
    },
  },
  { timestamps: true }
);

module.exports = model("Comment", commentSchema);