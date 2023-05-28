const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/jwt');
const secretKey = "Talha";

const jwtAuthorization = {
    sign(payload) {
        const token = jwt.sign(payload, secretKey);
        return token;
    },





verifyToken(req, res, next)
{
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });

    }

    try {
        const decoded = jwt.verify(token, secretKey);
        console.log(decoded)
        req.userId = decoded.userId;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
}
module.exports = jwtAuthorization ;


// header 
//authorization : use to authorize 
//? optional  :if not avail , not work stop
//jwt.verify : function of jwt ,(param1,param2)=>(token ,secrteKey)
//decoded : complete info of user avail here 
//decoded.userId : get id 