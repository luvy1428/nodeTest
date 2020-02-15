var express = require('express');
var router = express.Router();

router.get('/',(req, res)=>{
    res.send('Hello world');
});

router.get('/:id',(req, res)=>{
    res.send(`User id : ${req.params.id}`)
});


module.exports = router;