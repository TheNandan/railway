const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Model = mongoose.model

const devSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    linkedin:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const dev = Model('dev',devSchema)

module.exports = dev