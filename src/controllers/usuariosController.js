const express = require('express');
const router = express.Router();

exports.criarUsuario=(req, res) => {
    const{nome, email, idade} = req.body

// Validação do nome
    if(!nome || nome.length <= 3){
        return res.status(400).json({
            sucess: false,
            error: "Nome deve ter mais de 3 letras"
        })
    }


// Validação do email
    if(!email || !email.includes("@")){
        return res.status(400).json({
            sucess:false,
            error:"Email Invalida"
        })
    }

// Validação da idade
    if(!idade || idade < 0 || idade > 120){
        return res.status(400).json({
            sucess:false,
            error: "idade invalido"
        })
    }

    return res.status(201).json({
        sucess: true,
        message: "Usustio criado com sucesso",
        data: {nome, email, idade}
    })
}