var Userdb = require('../model/model');

//Criar e salvar funcionario
exports.create = (req, res) =>{
    //validação
    if(!req.body){
        res.status(400).send({Mensagem:"Conteúdo não pode estar vázio!"});
        return;
    }
    //Criar Funcionario
    const funcionario = new Userdb({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        turno: req.body.turno,
        funcao: req.body.funcao,
        salario: req.body.salario,

    })

    //Salvar Funcionario no banco de dados
    funcionario
        .save(funcionario)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                Mensagem: err.message ||"Algum erro ocorreu"
            })
        })
}

//Retorna todos os funcionarios
exports.find = (req, res) =>{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({Mensagem: err.message || "Ocorreu Erro ao retornar dados"})
    })
}

//Atualizar funcionario
exports.update = (req, res) =>{
    if(!req.body){
        return res
            .status(400)
            .send({Mensagem: "Dados não podem estar vazios"})
    }
    const id= req.params.id;

    Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
        .then(data=>{
            if(!data){
                res.status(404).send({Mensagem:`Não é possivel atualizar os dados do usuário ${id}.`})
            } else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({Mensagem: "Erro ao atualizar dados"})
        })
}       


//Deletar funcionario
exports.delete = (req, res) =>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({Mensagem: 'Não possivel deletar'})
            }
        })
}