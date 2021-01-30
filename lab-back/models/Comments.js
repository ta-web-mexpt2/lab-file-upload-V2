const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    
    content: {
      type: String,
      maxlength:60
    },
    authorId: {
        type: Schema.Types.ObjectId,
        required: [true, "Debes ser un usuario para agergar comentarios"],
        ref: "User",
      },
    imageName: {
        type: String,
    },
    imageUrl:{
        type:String,
    }
  },
  { timestamps: true }
);

module.exports = model("Comments", commentSchema);