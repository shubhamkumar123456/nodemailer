const mongoose = require('mongoose');

const connectToDb = async()=>{
    await mongoose.connect('mongodb://0.0.0.0:27017/nodemialer')
    .then(()=>console.log("connected to mongodb successfully"))
    .catch(err=>console.log('error in connecting mongo db'))
}

module.exports = connectToDb;