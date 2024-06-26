const jwt = require('jsonwebtoken')
//const CustomAPIError = require('../errors/custom-error')
const {BadRequestError} = require('../errors')

const login = async (req,res)=>{
    const {username, password} = req.body
    if(!username || !password){
        throw new BadRequestError('please provide a username and password')
    }
    //just for demo, normally provided by db
    const id = new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'user created',token: token})
    //console.log(username,password);
   // res.send('Fake login/Register/Signup Route')
}

const dashboard = async(req,res)=>{
    console.log(req.user);
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, ${req.user.username}`, secret:`Here is your authorized data, your lucky Number ${luckyNumber}`})

    }

module.exports = {login, dashboard}