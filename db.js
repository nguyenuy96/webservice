const host = '127.0.0.1'
const user = 'root'
const password = 'root1996'
const database = 'nodejs'
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
})
module.exports = {connection}