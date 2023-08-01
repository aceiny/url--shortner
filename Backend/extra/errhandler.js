const errhandler = (err,req,res,next) => {
    res.status(500).send('Server Breakdown')
}
module.exports = errhandler