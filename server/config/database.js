const mongoose = require('mongoose');


const connect = () =>{
   mongoose.set('strictQuery', false);

   mongoose.connect(`mongodb+srv://root:root@cluster0.jlejbpm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).then(()=>{
   console.log("database is connected");
  }).catch((err)=>{
      console.log(err)
   })
} 


module.exports = {connect}