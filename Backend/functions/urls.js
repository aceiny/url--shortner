const sayHello = (req,res) => res.send('hello')
const Urls = require('../db/model')

function RanGen() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }
const checkurl = async () => {
    const randomstring = RanGen()
    const counturl = await Urls.countDocuments({urlid: randomstring})
    if (counturl == 0) {
        return randomstring
    }
    else {
        return checkurl()
    }
}
  
const addUrl = async (req,res) => {
    try {
        const id = await checkurl()
        const createdUrl = await Urls.create({url: req.body.url , urlid:id})
        if (createdUrl) {
            return res.status(200).json(createdUrl)
        }
        return res.status(400).json({add : false})
    }
    catch(err) {
        return res.status(500).json(err)
    }
}
const getUrl = async (req,res) => {
    try {
        const {id} = req.params
        const urlf = await Urls.findOne({urlid : id})
        if(urlf){
            return res.status(200).json(urlf)
        }
        else {
            return res.status(400).send('doesnt exist')
        }
    }catch(err){
        res.status(500).json(err)
    }

    
}
module.exports = { //exportin functions to use in the router
    sayHello,
    addUrl,
    getUrl
}