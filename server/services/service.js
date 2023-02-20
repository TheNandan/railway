
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

exports.error = async( req,res ) => {
    res.render('404',{
        title:"Railway | Error"
    })
}