const express = require('express');
const Cause = require('../controllers/cause');
const router = express.Router();

//post operation
router.route('/api/causes')
.post((req, res) =>{
    Cause.createCause(req, res);
    // res.send("ok")
});

//get all the cause
router.route('/api/causes')
.get((req, res) => {
    Cause.getAllCause(req, res);
});

//get cause by Id
router.route('/api/causes/:causeId')
.get((req, res) => {
    Cause.getSingleCause(req, res);
});

//get - welcome page
router.route('/')
.get((req, res) => {
    res.status(200).json({
      message: 'Welcome to Project Support',
    });
});

//patch - update the cause
router.route('/api/causes/:causeId')
.patch((req, res) => {
    Cause.updateCause(req, res);
});


//delete cause by Id
router.route('/api/causes/:causeId')
.delete((req, res) => {
    Cause.deleteCause(req, res);
});

module.exports = router;