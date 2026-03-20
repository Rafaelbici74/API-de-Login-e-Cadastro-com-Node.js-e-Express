const router = require("express").Router();
const loginController = require("../controllers/loginController");

// GET http://localhost:3000/status
router.get("/", loginController.login);

module.exports = router;