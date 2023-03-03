const route = require('express').Router()
const multer = require('multer')
const path = require('path')
const appService = require('../services/service')
const appControl = require('../controllers/controller')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
})

const upload = multer({storage:storage}).single('profile')

// Index
route.get('/',appService.home)
route.post('/',appControl.home)

// Auth
route.get('/signin',appService.signin)
route.post('/signin',appControl.postSignin)
route.get('/signup',appService.signup)
route.post('/signup',appControl.postSignup)

// profile
route.get('/profile',appService.profile)
route.post('/profile',upload,appControl.postProfile)
route.get('/editprofile/:id',appService.geteditprofile)
route.post('/updateprofile/:id',upload,appControl.postupdateprofile)

// train
route.get('/train',appService.train)
route.get('/addtrain',appService.addtrain)
route.post('/addtrain',appControl.postaddtrain)
route.get('/edittrain/:id',appService.edittrain)
route.post('/updatetrain/:id',appControl.postupdatetrain)
route.get('/deletetrain/:id',appControl.deletetrain)

// City
route.get('/city',appService.getcity)
route.post('/addcity',appControl.postaddcity)
route.get('/deletecity/:id',appControl.deletecity)

route.get('/logs',appService.logs)
route.get('/userlogs',appService.userlogs)
route.get('/deletelog/:id',appControl.deletelog)

route.get('/panel',appService.panel)

route.get('/logout',appControl.getLogout)

route.get('/dev',appService.getdev)
route.get('*',appService.error)

module.exports = route