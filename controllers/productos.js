// Controlador para el manejo de los productos

// Conectamos el controlador con su modelo correspondiente

const { request } = require("express");
let producto = require("../models/productos");
const { param } = require("../routes/productos");

// CRUD tipico :: Listar todos, por ID, crear, actualizar, borrar, etc.
const listarTodos = async (req, res) => {
  try {
    // Consultar todos
    let listarProductos = await producto.find().exec();
    res.status(200).send({
      exito: true,
      listarProductos,
    });
  } catch (error) {
    res.status(500).send({
      exito: false,
      mensaje: "Error en la consulta",
    });
  }
};

const nuevo = async (req, res) => {
  // Llega el objeto en el body del request
  let data = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen,
    marca: req.body.marca,
    precio: req.body.precio,
    existencia: req.body.existencia,
    rating: req.body.rating,
    numRevisiones: req.body.numRevisiones,
    estaOfertado: req.body.estaOfertado,
  };

  try {
    // Instancia del modelo producto
    const productoNuevo = new producto(data);
    // Salvamos en mongo
    productoNuevo.save();

    return res.send({
      estado: true,
      mensaje: "Insercion exitosa",
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: `Ocurrio un error en la consulta ${error}`,
    });
  }
};

module.exports = {
  listarTodos,
  nuevo,
};
