// Modelo para la coleccion productos
// Destructuring de la clase mongoose :: Solo traigo los metodos que necesito
const { Schema, model } = require("mongoose");

// Creamos el schema
const productoSchema = Schema(
  {
    //nombre: String,
    nombre: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: false,
    },
    //existencia: Number
    existencia: {
      type: Number,
      required: true,
    },
  },
  { Collection: "producto" }
);
module.exports = model("producto", productoSchema);
