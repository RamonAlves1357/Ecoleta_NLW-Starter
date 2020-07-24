const express = require('express')
const server = express()

// Pegando o DB
const db = require("./database/db")

// Config pasta publica
server.use(express.static("public"))

// Habilitar o uso do "req.body"
server.use(express.urlencoded({ extended: true }))

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

server.post("/savepoint", (req, res) => {
    req.body = {}

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function after(err) {
        if (err) {
            return console.log(err)
        }

        console.log(" Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }
    db.run(query, values, after)

})

// Pagina "search-point"
server.get("/search", (req, res) => {

    const search = req.query.search

    if (search == "") {
        // pesquisa vazia
        return res.render("search-results.html", { total: 0 })
    }

    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        // mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total })
    })
})

// Ligar o servidor 
server.listen(3000, (req, res) => {
    console.log("Server iniciado! \nhttp://localhost:3000")
})