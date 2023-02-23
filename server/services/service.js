
exports.home = async( req,res ) => {
    res.render('index',{
        title:"Railway"
    })
}

exports.signin = async( req,res ) => {
    res.render('signin',{
        title:"Railway | Sign in"
    })
}

exports.signup = async( req,res ) => {
    res.render('signup',{
        title:'Railway | Sign up'
    })
}

exports.profile = async( req,res ) => {
    res.render('Profile',{
        title:"Railway | Profile"
    })
}

exports.logs = async( req,res ) => {
    res.render('logs',{
        title:"Railway | Search History"
    })
}

exports.panel = async( req,res ) => {
    res.render('panel',{
        title:"Railway | Admin Panel"
    })
}

exports.error = async( req,res ) => {
    res.render('404',{
        title:"Railway | Error"
    })
}