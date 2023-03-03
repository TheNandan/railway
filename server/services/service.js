const Auth = require('../models/auth')
const Profile = require('../models/profile')
const Train = require('../models/train')
const City = require('../models/city')
const Log = require('../models/logs')
const dev = require('../models/dev')

exports.home = async( req,res ) => {
    const auth = req.session.auth
    const city = await City.find({})
    res.render('index',{
        title:"Railway",
        auth : auth,
        city:city
    })
}

exports.signin = async( req,res ) => {
    if(req.session.auth)
    {
        res.redirect('/')
    }
    else
    {
        res.render('signin',{
            title:"Railway | Sign in"
        })
    }
    
}

exports.signup = async( req,res ) => {
    if(req.session.auth)
    {
        res.redirect('/')
    }
    else
    {
        res.render('signup',{
            title:'Railway | Sign up'
        })
    }
    
}

exports.profile = async( req,res ) => {
    const auth = req.session.auth
    if(!auth)
    {
        res.redirect('404')
    }
    else
    {  
        res.render('profile',{
        title:"Railway | Profile",
        auth:auth
    })
    }
}

exports.logs = async( req,res ) => {
    if(!req.session.auth)
    {
        res.redirect('/404')
    }
    else
    {
        const logs = await Log.find({role:'user'})
        const logcount = await Log.find({role:'user'}).count()
        console.log(logs)
        const auth = req.session.auth
        res.render('logs',{
        auth:auth,
        title:'Railway | Search Logs',
        logs:logs,
        logcount:logcount
        })
    }
}

exports.userlogs = async( req,res )=> {
    
    if(!req.session.auth)
    {
        res.redirect('/404')
    }
    else
    {
        if(req.query.email)
        {
            const auth = req.session.auth
            const qemail = req.query.email
            const logs = await Log.find({searchedBy:qemail})
            const logcount = await Log.find({searchedBy:qemail}).count()
            res.render('userlogs',{
            title:'Railway | UserLogs',
            auth:auth,
            logcount:logcount,
            logs:logs
            })
        }
        else
        {
            const auth = req.session.auth
            const logs = await Log.find({searchedBy:auth.email})
            const logcount = await Log.find({searchedBy:auth.email}).count()
            res.render('userlogs',{
            title:'Railway | UserLogs',
            auth:auth,
            logcount:logcount,
            logs:logs
            })
        }
    }


    
}

exports.panel = async( req,res ) => {
    if(!req.session.auth)
    {
        res.redirect('/404')
    }
    else
    {
        const profile = await Profile.find({role:'user'})
    const totalusers = await Profile.find({role:'user'}).count()
    const totaltrains = await Train.find().count()
    const totalcity = await City.find().count()
    const totallog = await Log.find({role:'user'}).count()
    const auth = req.session.auth
    res.render('panel',{
        title:"Railway | Admin Panel",
        auth:auth,
        profile:profile,
        tusers:totalusers,
        ttrains:totaltrains,
        tcity:totalcity,
        tlogs:totallog,
    })
    }
}

exports.geteditprofile = async( req,res )=>{
    if(!req.session.auth)
    {
        res.redirect('/404')
    }
    else
    {
        const auth = req.session.auth
    const id = req.params.id
    
    Profile.findById(id,(err,profile)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            if( profile == null)
            {
                res.redirect('/profile')
            }
            else
            {
                res.render('editprofile',{
                    title:'Railway | Edit Profile',
                    profile:profile,
                    auth:auth
                })

            }
        }
    })
    }
}

exports.train = async(req,res) => {
    if(!req.session.auth)
    {
        res.redirect('/404')
    }
    else
    {
        const getTrain = await Train.find({})

        if(getTrain.length != 0)
        {
            const auth = req.session.auth
            res.render('train',{
            title:'Railway | Train',
            auth:auth,
            trains:getTrain
            })
        }
        else
        {
            const auth = req.session.auth
            res.render('train',{
            title:'Railway | Train',
            auth:auth,
            trains:0
            })
        }
    }
}

exports.addtrain = async(req,res) => {
    if(!req.session.auth)
    {
        res.redirect('/404')
    }
    else
    {
        const auth = req.session.auth
    const city = await City.find({})
    res.render('addtrain',{
        title:'Railway | Add Train',
        city:city,
        auth:auth
    })
    }
}

exports.edittrain = async(req,res) => {
    if(!req.session.auth)
    {
        res.redirect('/404')
    }
    else
    {
        const city = await City.find({})
    const auth = req.session.auth
    const id = req.params.id
    Train.findById(id,(err,train)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            if( train == null)
            {
                res.redirect('/train')
            }
            else
            {
                res.render('edittrain',{
                    title:'Railway | Edit Train',
                    train:train,
                    city:city,
                    auth:auth
                })

            }
        }
    })
    }
}


exports.getcity = async( req,res ) => {
    if(!req.session.auth)
    {
        res.redirect('/404')
    }
    else
    {
        const auth = req.session.auth
    const city = await City.find({})
    const cityCount = await City.find({}).count()
    const colors = [{c:'success',},{c:'warning',},{c:'info',},{c:'danger',},{c:'primary',}]
    res.render('city',{
        title:"Railway | Cities ",
        auth:auth,
        city:city,
        cc:cityCount,
        colors:colors
    })
    }
}


exports.getdev = async( req,res ) => {
    
    if(req.session.auth)
    {
        const auth = req.session.auth
    const devDetails = await dev.find({})
    res.render('dev',{
        title:'Railway | DEV ',
        auth:auth,
        dev:devDetails
    })
    }
    else
    {
        res.redirect('/404')
    }
    
}

exports.error = async( req,res ) => {
    if(req.session.auth)
    {
        res.redirect('/')
    }
    else
    {
        res.render('404',{
            title:"Railway | Error"
        })
    }
    
}