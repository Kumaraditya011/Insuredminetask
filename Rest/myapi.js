var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

var Register = require('../Model/usermodel');
 
var MongoClient = require('mongodb').MongoClient;

function verifyToken(req, res, next){
    if (!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token == 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
        return res.status(401).send('Unauthorized request')

    }
    req.userId = payload.subject
    next()
}


//register

router.post('/useradd', (req, res) => {
   
    var sd = new Register(req.body);
    sd.save();
    let payload = { subject: req.body_id }
    let token = jwt.sign(payload, 'secretKey')
    res.status(201).send({token});

});

//login

router.post('/login', (req, res) =>{
    let userData = req.body;

    Register.findOne({mail: userData.mail}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else 
            if ( user.pwd !== userData.pwd) {
                res.status(401).send('Invalid password')
            } else {
                let payload ={ subject: req.body_id }
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    } )
});

module.exports = router;
