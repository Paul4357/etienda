// Controlador para el manejo de los usuarios

// Conectamos el controlador con su modelo correspondiente
let Usuario = require("../models/usuarios");

const bcrypt = require("bcryptjs");

// Funciones de la libreria (Programacion funcional) :: metodos de la clase (POO)

const registro = async (req, res) => {
  let datos = {
    nombre: req.body.nombre,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    telefono: req.body.telefono,
    esAdmin: req.body.esAdmin,
    direccion: req.body.direccion,
    zip: req.body.zip,
    ciudad: req.body.ciudad,
    pais: req.body.pais,
  };

  const usuarioExiste = await Usuario.findOne({ email: datos.email });

  if (usuarioExiste) {
    return res.send({
      estado: false,
      mensaje: "El usuario ya existe en el sistema.",
    });
  } else {
    try {
      const usuarioNuevo = new Usuario(datos);
      await usuarioNuevo.save();
      return res.send({
        estado: true,
        mensaje: "Usuario creado exitosamente.",
      });
    } catch (error) {
      return res.send({
        estado: false,
        mensaje: `error ${error}`,
      });
    }
  }
};

const login = async (req, res) => {
  let usuarioExiste = await Usuario.findOne({ email: req.body.email });

  if (!usuarioExiste) {
    return res.send({
      estado: false,
      mensaje: "¡No existe el usuario!",
    });
  }

  if (bcrypt.compareSync(req.body.password, usuarioExiste.passwordHash)) {
    return res.send({
      estado: true,
      mensaje: "OK",
    });
  } else {
    return res.send({
      estado: false,
      mensaje: "¡Contraseña incorrecta!",
    });
  }
};

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

const nuevo = async (req, res) => {
  // Llega el objeto en el body del request
  let data = {
    nombre: req.body.nombre,
    email: req.body.email,
    /* passwordHash: req.body.passwordHash, */
    telefono: req.body.telefono,
    esAdmin: req.body.esAdmin,
    direccion: req.body.direccion,
    zip: req.body.zip,
    ciudad: req.body.ciudad,
    pais: req.body.pais,
  };

  try {
    // Instancia del modelo usuario
    const usuarioNuevo = new Usuario(data);
    // Salvamos en mongo
    await usuarioNuevo.save();

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
    let consulta = await Usuario.findById(id).exec();
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

// Actualizar de acuerdo al ID del usuario
const actualizarPorId = async (req, res) => {
  let id = req.params.id;

  // Payload que viene en el body :: Los datos que manda el formulario
  let payload = {
    nombre: req.body.nombre,
    email: req.body.email,
    /* passwordHash: req.body.passwordHash, */
    telefono: req.body.telefono,
    esAdmin: req.body.esAdmin,
    direccion: req.body.direccion,
    zip: req.body.zip,
    ciudad: req.body.ciudad,
    pais: req.body.pais,
  };
  try {
    let consulta = await Usuario.findByIdAndUpdate(id, payload).exec();
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
    let consulta = await Usuario.findOneAndDelete({ _id: id }).exec();
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
  registro,
  login,
  listarTodos,
  nuevo,
  buscarPorId,
  actualizarPorId,
  borrarPorId,
};
