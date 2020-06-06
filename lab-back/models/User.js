const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    
    username: {
      type: String,
      required: [true, "Debes mandar un Nombre de usuario"],
    },
    email: {
        type: String,
        required: [true, "Debes agregar un correo electrónico"],
        validate: {
          message: "El email ya esta en uso",
          validator: async (email) => {
            const items = await mongoose.models["User"].count({ email });
            return items < 1;
          },
        },
      },
    password: {
        type: String,
        required: [true, "Debes agregar que un contraseña"],
    },
    avatar:{
        type:String,
        required: [true, "Debes agregar una imagen de perfil"],
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);