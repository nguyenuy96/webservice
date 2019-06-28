const host = '127.0.0.1'
const port = 8080
const express = require('express')
const app = express();
const connection = require('./db').connection
connection.connect(() => {
    console.log(`Connection to database successfully!`)
})
app.use('/user', require('./user'))
app.listen(port, host, () => {
    console.log(`Server started on port ${port}`)
})
