const router = require("express").Router();
const usuariosController = require("../controllers/usuariosController");

// GET http://localhost:3000/status
router.post("/", usuariosController.criarUsuario);

module.exports = router;