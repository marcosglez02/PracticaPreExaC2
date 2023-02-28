const http = require("http");
const express = require("express");
const app = express();

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.render('index.ejs')
 });


// Archivo de error en caso de no encontrar la página
app.use((req,res,next)=>{res.status(404).sendFile(__dirname+'/public/error.html')})
// Escuchar al servidor por el puerto 500
const puerto = 500;
app.listen(puerto,()=>{console.log("Iniciando puerto 500")});