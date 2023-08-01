const {Schema,model} = require('mongoose')
const UrlSchema = new Schema({
    url:{
        type : String,
        required:[true,"moust provide name"],   
        trim:true,
    },
    urlid:{
        type:String
    }
})
module.exports = model('Urls'/*collection name in the database*/,UrlSchema/*schema to use on it*/)