import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORTDB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
})

conexao.connect()

export default conexao