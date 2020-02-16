var express = require('express');
var router = express.Router();

let userArr = [
    {id: 1, name:'luv',country:'holland'},
    {id: 2, name:'kush',country:'london'}
];

router.get('/',(req, res)=>{
    res.send('Hello world');
});

router.get('/:id',(req, res)=>{
    let name;
    let country;
    userArr.forEach(function(element){
        //console.log(element.id);
        //console.log(typeof req.params.id)
       // console.log(typeof element.id)
        if(req.params.id == element.id){
            console.log(element.name);
            name = element.name;
            country = element.country;
        }
    })
    res.send(`User name : ${name} and country: ${country}`);
});


module.exports = router;