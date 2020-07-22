// Importar a dependencia do SQLite3
const SQLite3 = require("sqlite3").verbose()

// Criando o Objeto do Banco de Dados
const db = new SQLite3.Database("./src/database/database.db")

module.exports = db

// Ultilizando o objeto "db" para nossas operaões
// db.serialize(() => {
//     // Criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // Inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//         "Colectoria",
//         "José Domingos, Centro",
//         "Número 115",
//         "Paraiba",
//         "São Francisco",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function after(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log(" Cadastrado com sucesso")
//         console.log(this)
//     }
//     db.run(query, values, after)

//     // Consultar dados da atbela
//     // db.all(`SELECT * FROM places`, function(err, rows) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log(" Aki estão os registros: ")
//     //     console.log(rows)
//     // })


//     // Deletar um dado da tabela
//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Registro deletado com sucesso!")
//     // })
// })