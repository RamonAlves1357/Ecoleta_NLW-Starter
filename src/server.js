const express = require('express')
const server = express()

// Config pasta publica
server.use(express.static("public"))

// Config de rotas
//Pagina inicial
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

// Pagina "Creat-point"
server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

// Ligar o servidor 
server.listen(3000, (req, res) => {
    console.log("Server iniciado! \nhttp://localhost:3000")
})