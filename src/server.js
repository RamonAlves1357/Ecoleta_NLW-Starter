const express = require('express')
const server = express()

// Config pasta publica
server.use(express.static("public"))

// Template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Config de rotas
//Pagina inicial
server.get("/", (req, res) => {
    res.render("index.html")
})

// Pagina "Creat-point"
server.get("/create-point", (req, res) => {
    res.render("create-point.html")
})

// Pagina "search-point"
server.get("/search", (req, res) => {
    res.render("search-results.html")
})

// Ligar o servidor 
server.listen(3000, (req, res) => {
    console.log("Server iniciado! \nhttp://localhost:3000")
})