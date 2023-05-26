const router = require('express').Router();
let Questions = require('./form_questions_model') ; 
// Idhar thoda confusion hai ki yeh atually krne kya wala hai 
router.route('/:id').get((req , res) => {
    Questions.findById(req.params.id)  
    .then(questions => res.json(questions) ) 
    .catch(err => res.status(400).json('Error' + err)) ;
}) ; 

router.route('/add').post((req , res) =>{
    const title = req.body.title ;
    const fields = req.body.fields ;

    const newQuestionform = new Questions({title , fields}) ; 
    newQuestionform.save() 
    .then(() => res.json('Question form saved successfully')) 
    .catch((err) => res.status(400).json('Error' + err)) ;

}) 

module.exports = router ; 


