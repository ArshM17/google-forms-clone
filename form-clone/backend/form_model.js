const mongoose = require('mongoose') ;

const Schema = mongoose.Schema ; 

const formSchema = new Schema({
    title: {
        type : String ,
        required : true ,
        unique : true ,
        trim : true ,
        minLength:3 ,

    },
    // fields: [
    //     { question: "Question1?", options: ["A", "B", "Q", "D", "R"], id: 0 },
    //     { question: "Question2?", options: ["A", "B", "P", "D"], id: 1 },
    //     { question: "Question3?", options: ["A", "F", "C"], id: 2 },
    //     { question: "Question4?", options: ["A", "D"], id: 3 },
    //   ], 

    fields :{
        type : Array ,
        required : true ,

    } ,
//       response: {
//         count: 0,
//         responses: [
//           [1, 2, 3, 4, 1],
//           [4, 1, 2, 3],
//           [4, 3, 0],
//           [1, 6],
//         ],
// } 
    count :{
      type: Number,
      default: 0,
    } ,

    responses :{ 
      type: [[Number]], // Array of arrays of numbers
      default: [], 
    } 
   }
) 

const Form = mongoose.model('Form' , formSchema) ; 
module.exports = Form ;  
