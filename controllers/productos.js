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
    await productoNuevo.save();

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

// Buscar por ID o por otro parametro
const buscarPorId = async (req, res) => {
  // Recibimos el parametro por el cual debo buscar
  let id = req.params.id;

  try {
    // Buscar y mostrar el resultado del query
    let consulta = await producto.findById(id).exec();
    return res.send({
      estado: true,
      mensaje: "Exito",
      consulta: consulta,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: "Error, no se encontro el documento",
      error: error,
    });
  }
};

// Actualizar de acuerdo al ID del producto
const actualizarPorId = async (req, res) => {
  let id = req.params.id;

  // Payload que viene en el body :: Los datos que manda el formulario
  let payload = {
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
    let consulta = await producto.findByIdAndUpdate(id, payload).exec();
    return res.send({
      estado: true,
      mensaje: "Actualizado exitosamente",
      consulta: consulta,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: "Error al actualizar el documento",
      error: error,
    });
  }
};

// Borrar de acuerdo al ID :: ESTE ES UN BORRADO DIDACTICO -- NO LO USE EN LA VIDA REAL
const borrarPorId = async (req, res) => {
  // Recibimos el parametro por el cual debo buscar
  let id = req.params.id;
  console.log(id);

  try {
    // Borrar y mostrar el resultado del query
    let consulta = await producto.findOneAndDelete({ _id: id }).exec();
    /* let consulta = await producto.findByIdAndDelete(id).exec(); */
    console.log(consulta);
    return res.send({
      estado: true,
      mensaje: "Borrado exitosamente",
      consulta: consulta,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: "Error, no se encontro el documento",
      error: error,
    });
  }
};

module.exports = {
  listarTodos,
  nuevo,
  buscarPorId,
  actualizarPorId,
  borrarPorId,
};
