const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const misRutas = require("./router/index");
const path = require("path");

app.use(express.static(__dirname+'/public'))
app.use(bodyparser.urlencoded({extended:true}));
app.use(misRutas)

// Archivo de error en caso de no encontrar la página
app.use((req,res,next)=>{res.status(404).sendFile(__dirname+'/public/error.html')})
// Escuchar al servidor por el puerto 500
const puerto = 500;
app.listen(puerto,()=>{console.log("Iniciando puerto 500")});