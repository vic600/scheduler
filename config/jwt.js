const crypto=require('crypto').randomBytes(256).toString('HEX')
module.exports={
    secret:crypto
}