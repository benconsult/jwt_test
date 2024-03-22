const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res)=>{
    const {username, password} = req.body
    if(!username || !password){
        throw new CustomAPIError('please provide a username and password', 400)
    }
    //just for demo, normally provided by db
    const id = new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'user created',token: token})
    //console.log(username,password);
   // res.send('Fake login/Register/Signup Route')
}

const dashboard = async(req,res)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No token provided', 401)
   
    }
    const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, ${decoded.username}`, secret:`Here is your authorized data, your lucky Number ${luckyNumber}`})

  } catch (error) {
    throw new CustomAPIError('Not authorize to access this route', 401)
   
  }
    }

module.exports = {login, dashboard}