const User = require("../Models/User.js");
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'SERCRET1234'

const authMiddleware = async (req, res, next) => {
  let { token } = req.headers;
  if (!token) {
    return res.status(404).send({ error: true, message: "No token found" });
  }
  try{
    const {email, id, role} = jwt.verify(token, JWT_SECRET);
    
    const user = await User.findById(id);

    if(user.email!==email || role!==user.role){
        return res.status(401).send({error:true, message:"Unathorized Action or Invalid Token"})
    }

    req.headers.userId = id;
    next();

  }catch(err){
    return res.status(402).send({error:true, message:err.message});
  }
};

module.exports = authMiddleware;