// Controlador para el manejo de los usuarios

// Conectamos el controlador con su modelo correspondiente
let Usuario = require("../models/usuarios");

// Funciones de la libreria (Programacion funcional) :: metodos de la clase (POO)

// CRUD tipico :: Listar todos, por ID, crear, actualizar, borrar, etc.
const listarTodos = async (req, res) => {
  try {
    // Consultar todos
    let listarUsuarios = await Usuario.find().exec();
    res.status(200).send({
      exito: true,
      listarUsuarios,
    });
  } catch (error) {
    res.status(500).send({
      exito: false,
      mensaje: "Error en la consulta",
    });
  }
};

module.exports = {
  listarTodos,
};
