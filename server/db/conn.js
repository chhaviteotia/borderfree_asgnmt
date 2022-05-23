const mongoose = require('mongoose');
// connecting to mongodb atlas
const DB = process.env.DATABASE;


mongoose.connect(DB).then(() =>{
    console.log('Connection successful');
}).catch((err) => console.log(err));


// DB Connection//
// const DB ="mongodb+srv://ChhaviTeotia:CHH31081995@mernproject.ek3lo.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(DB).then(()=>{
//     console.log("DB connection successfull")
// }).catch((err)=> console.log(err))