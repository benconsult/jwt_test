const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res)=>{
    const {username, password} = req.body
    if(!username || !password){
        throw new CustomAPIError('please provide a username or password', 400)
    }
    //just for demo, normally provided by db
    const id = new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'user created',token: token})
    //console.log(username,password);
   // res.send('Fake login/Register/Signup Route')
}

const dashboard = async(req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, Ben Bruce`, secret:`Here is your lucky Number ${luckyNumber}`})
}

module.exports = {login, dashboard}