const express = require('express');
const Cause = require('../controllers/cause');
const router = express.Router();


router.route('/api/causes')
.post((req, res) =>{
    Cause.createCause(req, res);
    // res.send("ok")
});

router.route('/api/causes')
.get((req, res) => {
    Cause.getAllCause(req, res);
});

router.route('/api/causes/:causeId')
.get((req, res) => {
    Cause.getSingleCause(req, res);
});

router.route('/')
.get((req, res) => {
    res.status(200).json({
      message: 'Welcome to Project Support',
    });
});
  

module.exports = router;