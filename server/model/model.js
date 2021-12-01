const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    endereco:{
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        required: true,
        unique: true
    },
    turno: String,
    salario:{
        type: String,
        required: true
    },
    funcao:{
        type: String,
        required: true
    }
})

constUserdb = mongoose.model('userdb', schema);

module.exports = Userdb;