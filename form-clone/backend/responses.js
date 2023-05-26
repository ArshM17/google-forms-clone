const express = require('express') ;
const router = express.Router() ;
let Response = require('./form_model') ;

router.route('/').get((req , res) =>{
    Response.find() 
    .then(responses => res.json(responses)) 
    .catch(err => res.status(400).json('Error '+ err)) ;
}) 

router.route('/send').post((req , res) =>{
    const title = req.body.title ;
    const fields = req.body.fields ;
    const count = req.body.count ; 
    const responses = req.body.responses ; 

    const newResponse = new Response({title , fields , count , responses}) ; 

    newResponse.save()
    .then(() => res.json('Response saved')) 
    .catch(err => res.status(400).json('Error' + err)) ; 





    
}) 

module.exports = router ; 
