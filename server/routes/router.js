const route = require('express').Router()
const appService = require('../services/service')
const appControl = require('../controllers/controller')

route.get('/',appService.home)

route.get('/signin',appService.signin)
route.post('/signin',appControl.postSignin)

route.get('/signup',appService.signup)
route.post('/signup',appControl.postSignup)

route.get('/profile',appService.profile)
route.get('/logs',appService.logs)

route.get('/panel',appService.panel)

route.get('*',appService.error)

module.exports = route