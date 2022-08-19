const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PSWD}@cluster0.mxgkpim.mongodb.net/?retryWrites=true&w=majority`, 
  ()=> {
  console.log('connected to mongodb')
})
