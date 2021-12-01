const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//especificando a ferramenta para o front end
app.set("view engine","ejs")      
//app.set("views", path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))

//renderizar a tela de front-end(html com o framework ejs)
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/table-funcionarios',(req,res)=>{
    res.render('table-funcionarios');
})
app.get('/novo-funcionario',(req,res)=>{
    res.render('novo-funcionario');
})

app.get('/cadastro-condominio',(req,res)=>{
    res.render('cadastro-condominio');
})

app.get('/alterarFuncionario',(req,res)=>{
    res.render('alterarFuncionario');
})

app.listen(3000, ()=>{console.log(`Server is running on http://localhost:${3000}`)})