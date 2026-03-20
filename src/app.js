const express = require('express');
const app = express();

app.use(express.json());

const usuariosRoutes = require("./routes/usuariosRoutes");
const loginRoutes = require("./routes/loginRoutes");


app.use('/usuarios', usuariosRoutes);

app.get("/usuarios", (req, res) =>{

    res.send("/usuarios")   

})

app.use('/login', loginRoutes);

app.get("/login", (req, res) =>{

    req.send("/login")   

})


module.exports = app;