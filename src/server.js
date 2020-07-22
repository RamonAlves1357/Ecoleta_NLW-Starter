const express = require('express')
const server = express()

// Pegando o DB
const db = require("./database/db")

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
    // Consultar dados da atbela
    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }
        // console.log(" Aki estão os registros: ")
        // console.log(rows)

        res.render("search-results.html", { places: rows })
    })

})

// Ligar o servidor 
server.listen(3000, (req, res) => {
    console.log("Server iniciado! \nhttp://localhost:3000")
})