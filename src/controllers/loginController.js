const express = require('express');
const router = express.Router();

exports.login=(req, res) => {
    const{user, senha} = req.body


// Validação do login
    if(!user || !user.includes("Rafael")){
        return res.status(400).json({
            sucess: false,
            error: "Usuario invalido"
        })
    }


// Validação do senha
    if(!senha || !senha.includes("123")){
        return res.status(400).json({
            sucess:false,
            error:"Senha invalida"
        })
    }

        return res.status(201).json({
        sucess: true,
        message: "Login correto",
        data: {user, senha}
    })
}