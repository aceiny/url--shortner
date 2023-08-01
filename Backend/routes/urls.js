const express = require('express')
let router = express.Router() // get the router from expresss

const {
    sayHello,
    addUrl,
    getUrl
        } = require('../functions/urls') // get the function that we will use


router.route('/').post(addUrl)
router.route('/:id').get(getUrl)


module.exports = router //export the router 