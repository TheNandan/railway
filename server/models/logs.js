const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Model = mongoose.model

const date = new Date
const searchedOn = date.toLocaleString('en-US',{
    day:'2-digit',
    month:'short',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
})

const logSchema = new Schema({

    source : {
        type : String,
        required : true,
        lowercase : true
    },
    destination : {
        type : String,
        required : true,
        lowercase : true
    },
    searchdate : {
        type : String,
    },
    result : {
        type : String,
        required : true,

    },
    role : {
        type : String,
        required : true
    },
    searchedBy : {
        type : String,
        required : true
    },
    searchedOn : {
        type : String,
        required : true,
        default : searchedOn
    }
})

const log = Model('log',logSchema)

module.exports = log