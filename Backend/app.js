//importin all requirements 
const express = require('express')
const app = express()
const connectdb = require('./db/connectdb') //db connection fonction 
const urls = require('./routes/urls')
const NotFound = require('./extra/notfound') //not found handler
const errhandler = require('./extra/errhandler') //err handler
require('dotenv').config()
const cors = require('cors')
app.use(cors())
// midddelwares 
app.use(express.json())
app.use('/api/v1/urls',urls) // link the products routes
//handelers
    app.use(NotFound) //handle wrong route pathes
    app.use(errhandler) //handle server errs
//start the server 
const port = process.env.PORT || 8080
const start = async () => { //await connection to db to start the server
    try {
        await connectdb(process.env.MONGO) // connect to db
        app.listen(port , console.log('listenin on port ' + port ))

    }catch(err) {
        console.log(err)
    }
}
start()