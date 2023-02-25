require('dotenv').config()

PORT = process.env.PORT || 8080
SECRET = process.env.SECRET 
const express = require('express')
const connectDB = require('./server/database/connection')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const app = express()

app.set('view engine','ejs')
app.use(express.static('assets'))
app.use(express.static('uploads'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(morgan('tiny'))
app.use(session({
    secret:SECRET,
    resave:false,
    saveUninitialized:true
}))
app.use( (req,res,next) => {
    res.locals.message = req.session.message
    delete req.session.message
    next()
})

app.use('/',require('./server/routes/router'))

connectDB().then(
    app.listen(PORT, async() => {
        console.log(` 🚀 Application is @ http://127.0.0.1:${PORT} ...\n`)
    })
).catch( error => {
    console.log(error)
})