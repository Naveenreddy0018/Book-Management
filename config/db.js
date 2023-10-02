const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Naveen_Reddy:heroViredProject@cluster0.0zvwr1k.mongodb.net/?retryWrites=true&w=majority');

// mongoose.connect('mongodb://127.0.0.1:27017/Book_Management');

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})