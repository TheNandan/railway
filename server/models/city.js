const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Model = mongoose.model

const date = new Date

const addedOn = date.toLocaleString('en-US',{
    day:'2-digit',
    month : 'short',
    hour : '2-digit',
    minute : '2-digit'
})

const citySchema = new Schema({
    name : { 
        type : String,
        required : true,
        lowercase : true
    },
    addedOn : {
        type : String,
        default : addedOn
    }
})

const city = Model('citie',citySchema)

module.exports = city