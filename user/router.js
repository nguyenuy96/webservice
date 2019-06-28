const express = require('express')
const handler = require('./handler')
const router = express.Router()

router.get('/', (req, res) => {
    handler.getUser().then(result => {
        res.json(result)
    })
})

module.exports = router