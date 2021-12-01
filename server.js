const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

//mongoDB conexão
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//especificando a ferramenta para o front end
app.set("view engine","ejs")      
//app.set("views", path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")))
app.use('/img', express.static(path.resolve(__dirname,"assets/img")))
app.use('/js', express.static(path.resolve(__dirname,"assets/js")))

//carregar Routes
app.use('/', require('./server/routes/router'))



app.listen(3000, ()=>{console.log(`Server is running on http://localhost:${3000}`)})