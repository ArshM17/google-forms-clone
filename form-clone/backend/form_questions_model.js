const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const formQuestionsSchema = new Schema({
    title :{
        type:String ,
        required:true ,
        unique:true ,
        trim:true ,
        minLength:3 ,
    } , 

    fields:{
        type:Array ,
        required : true ,
    } , 
}) 

const Questions = mongoose.model('Questions' , formQuestionsSchema) ;
module.exports = Questions ;  