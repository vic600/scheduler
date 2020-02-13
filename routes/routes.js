const express = require('express');
const router = express.Router();
const schedule = require('../models/schedule')

router.get('/', (req, res) => {
    schedule.findAll().then((s) => {
     
        res.json({ s })

    }).catch((err) => {
        
        res.json({success:false,message:err.errors})
    })
});

router.post('/', (req, res) => {
    const assigned = new Date().toString();
    //console.log(assigned);
    const deferred = new Date().toString();
    const in_progress = new Date().toString();
    let { access_code, age, agent_id, autoplay, comments, completed, customer_first_name, customer_last_name, customer_phone, gender, location, mpesa, personel_first_name, personel_other_name, splash_page, status, task_id, registration
    } = req.body;


    let errors = []

    if (!access_code) {
        errors.push({ message: 'no access_code provided' })
    }
    if (!age) {
        errors.push({ message: 'no age provided' })
    }
    if (!agent_id) {
        errors.push({ message: 'no agentid provided' })
    }

    if (!autoplay) {
        errors.push({ message: 'no autoplay provided' })
    }
    if (!comments) {
        errors.push({ message: 'no comments provided' })
    }
    if (!customer_first_name) {
        errors.push({ message: 'no customer_first_name provided' })
    }
    if (!customer_last_name) {
        errors.push({ message: 'no customer_last_name provided' })
    }
    if (!customer_phone) {
        errors.push({ message: 'no customer_phone provided' })
    }
    if (!deferred) {
        errors.push({ message: 'no deferred provided' })
    }
    if (!gender) {
        errors.push({ message: 'no gender provided' })
    }
    if (!in_progress) {
        errors.push({ message: 'no in_progress provided' })
    }
    if (!location) {
        errors.push({ message: 'no location provided' })
    }
    if (!mpesa) {
        errors.push({ message: 'no mpesa provided' })
    }
    if (!personel_first_name) {
        errors.push({ message: 'no personel_first_name provided' })
    }
    if (!personel_other_name) {
        errors.push({ message: 'no personel_last_name provided' })
    }
    if (!splash_page) {
        errors.push({ message: 'no splash_page provided' })
    }
    if (!status) {
        errors.push({ message: 'no status provided' })
    }
    if (!task_id) {
        errors.push({ message: 'no task_id provided' })
    }
    if (!registration) {
        errors.push({ message: 'no registraton provided' })
    }
    if (errors.length > 0) {
        res.json({ success: false, errors })
    } else {
        schedule.create({
            access_code, age, agent_id, assigned, autoplay, comments, completed, customer_first_name, customer_last_name, customer_phone, deferred, gender, in_progress, location, mpesa, personel_first_name, personel_other_name, splash_page, status, task_id, registration

        }).then((data) => {
           res.json({success:true,message:data})
        
        }).catch((err) => {
            
            res.json({success:false,message:err})

        })
    }

})

module.exports = router;