const sql = require('../db').connection
const User = require('./model').user
getAllUser = () => {
    return new Promise((resolve, reject) => {
        sql.query('select * from user', function(err, results) {
            if (err) {
                throw err;
            }
            resolve(results);
        });
    })
},

getUserById = (id) => {
    return new Promise((resolve, reject) => {
        sql.query(`select * from user where id = ${id}`, (err, results) => {
            resolve(results)
        })
    })
},

getUserByName = (name) => {
    
},

addUser = (user) => {
    User = JSON.parse(user);
    return new Promise((resolve, reject) => {
        sql.query(`insert into user (username, password) value (${User.username}, ${User.password})`, (err, results) => {
            resolve(results)
        })
    })
},

modifyUser = (user) => {
    User = JSON.parse(user)
    User.username
    User.password
}
module.exports = {getAllUser, getUserById, getUserByName, addUser, modifyUser}