exports.homeRoutes = (req, res) =>{
    res.render('index', {users:"Dado novo"})
}

exports.novoFuncionario = (req, res) =>{
    res.render('novo-funcionario');
}

exports.alterarFuncionario = (req, res)=>{
    res.render('alterarFuncionario');
}

exports.cadastroCondominio = (req, res)=>{
    res.render('cadastro-condominio');
}

exports.tableFuncionarios = (req, res)=>{
    res.render('table-funcionarios');
}