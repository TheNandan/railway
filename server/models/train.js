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

const trainSchema = new Schema({

    name : {
        type : String,
        required : true
    },
    source : {
        type : String,
        required : true
    },
    destination : {
        type : String,
        required : true
    },
    startDate : { 
        type : String,
        required : true
    },
    endDate : {
        type : String,
        required : true
    },
    ticket : {
        type :Number,
        required : true
    },
    time : {
        type : String,
        required : true
    },
    addedOn : {
        type : String,
        required : true,
        default : addedOn
    },
    updatedOn : {
        type : String,
    }
})

const train = Model('train',trainSchema)

module.exports = train

