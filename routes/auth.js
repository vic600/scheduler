const express = require('express');
const router = express.Router();
const user = require('../models/user')
const bcrypt = require('bcrypt');
const passport=require('passport');
const config=require('../config/jwt')
const jwt=require('jsonwebtoken');


router.post('/signup', (req, res) => {
    let { phone, firstname, password } = req.body;
    let errors = []
    
      
    if (!phone || phone.length < 10) {
        errors.push({ message: 'provide a valid phone' })
    }
    if (!firstname || firstname.length < 3) {
        errors.push({ message: 'provide a valid firstname' })
    }
    if (!password || password.length < 6) {
        errors.push({ message: 'provide a valid password' })
    }
   

    if (errors.length > 0) {
        res.json({ success: false, message: errors })
    } else {
        console.log(phone);

        user.findOne({ where: { phone: phone}}).then((email) => {


            if (!email) {
               
                bcrypt.hash(password, 8, function (err, hash) {
                    console.log(phone, email, hash);
    
                    user.create({
                        phone: req.body.phone, firstname: req.body.firstname, password: hash
                    }).then((user) => {
                        res.json({ success: true, message:`Account ${user.firstname} created `  })
                    }).catch(err => { res.json({ success: false, message: err }) })
                });
            }else{
                res.json({ success: false, message: 'Account in use' })
            }
          
        }).catch(err => { res.json({ success: false, message: err }) })
    }


})
router.post('/login',(req,res,next)=>{
    passport.authenticate('local', {session: false}, (err, user, info) => {
        // console.log(user.id);
        
        if (err || !user) {
            // return res.status(400).json({
            //     message: 'Something is not right',
            //     user   : user
            // });
            return res.json({error:err})
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
        //    console.log(config.secret);
           uid=user.id
           // generate a signed son web token with the contents of user object and return it in the response
           const accessToken = jwt.sign({uid}, config.secret,{expiresIn:'24h'});
        
           
           return res.json({reset_password:user.resetPassword,accessToken,expires_in:'24h'});
        });
    })(req, res,next);
})

module.exports=router;