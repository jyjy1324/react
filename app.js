const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require('morgan');
const helmet = require('helmet');
const port = 8000;
//import 'express-async-errors';

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jyjy1324:moondang7@cluster0.zppvo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDb Connected')).catch(err => console.log(err,"에러발생함"))






app.use([
    express.json(),
    helmet(),cors(),
    morgan('tiny')
    ]);

//app.use('/tweets',tweetsRoute);
app.use((req,res,next)=>{
    res.sendStatus(404);
})
app.use((error,req,res,next)=>{
    res.sendStatus(404);
})


app.listen(port, () => console.log(`현재 서버포트는 ${port} 가동중`));






