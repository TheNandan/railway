const route = require('express').Router()
const appService = require('../services/service')
const appControl = require('../controllers/controller')

route.get('/',appService.home)
route.get('/signin',appService.signin)
route.get('/signup',appService.signup)
route.post('/signin',appControl.postSignin)
route.post('/signup',appControl.postSignup)

route.get('*',appService.error)

module.exports = route