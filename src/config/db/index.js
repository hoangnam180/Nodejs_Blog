const mongoose = require('mongoose');
const connect = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Blog_dev',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected successfully to server');
    }catch{
        console.log('Error in connection');
    }
    
}

module.exports = {connect};