const bcrypt = require('bcrypt')
const Auth = require('../models/auth')


exports.postSignup = async( req,res ) => {
    const { email , password , cpassword } = req.body

   if ( email == '' || password == '' || cpassword == '')
   {
        req.session.message = {
            type : 'warning',
            message : 'WARNING !',
            desc : 'input fields cannot be empty !'
        }
        res.redirect('/signup')
   }
   else
   {
    if( password != cpassword)
    {
        req.session.message = {
            type : 'warning',
            message : 'WARNING !',
            desc : 'Password did not match !'
        }
        res.redirect('/signup')
    }
    else
    {   
        const isEmail = await Auth.findOne({email:email})
        
        if( isEmail )
        {
            req.session.message = {
                type : 'info',
                message : 'INFORMATION !',
                desc : 'User already exist !\nPlease Sign In'
            }
            res.redirect('/signin')
        }
        else
        {
            const hashpass = await bcrypt.hashSync(password,12)

        const regEmail = /@railway.com/i
        const isAdmin = regEmail.test(email)

        if( isAdmin )
        {
            const newUser = new Auth({
                email:email,
                password:hashpass,
                role : 'admin'
            })
            newUser.save().catch( err => {
                console.log(err)
            }).then(
                () => {
                    req.session.message = {
                        type : 'success',
                        message : 'Success !',
                        desc : 'Sign up successfull ! Now Please Sign in'
                    }
                    res.redirect('/signin')
                }
            ) 
        }
        else
        {
            const newUser = new Auth({
                email:email,
                password:hashpass
            })
            newUser.save().catch( err => {
                console.log(err)
            }).then(
                () => {
                    req.session.message = {
                        type : 'success',
                        message : 'Success !',
                        desc : 'Sign up successfull ! Now Please Sign in'
                    }
                    res.redirect('/signin')
                }
            ) 
        } 
        }
        
        
    }
}
}


exports.postSignin = async( req,res ) => {
    const { email , password } = req.body
    
}