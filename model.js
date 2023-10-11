const mongoose=require('mongoose')
const data=new mongoose.Schema({
    name:{
        type:String
    },
    brand:{
        type:String
    },
    image:{
        type:String
    },
    price:{
        type:Number
    },
    storage:{
        type:String
    },
    quanity:{
        type:String
    },
    

})

const ddd=mongoose.model('data',data)

module.exports=ddd