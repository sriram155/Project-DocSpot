const express = require('express');
const app = express();
const mongoose = require('mongoose')
const userRouter = require("./routes/studentRoutes")

const port = 8000;
mongoose
.connect("mongodb+srv://sri:ram@cluster0.q6rqbf1.mongodb.net/?appName=Cluster0")
.then(()=>{
       console.log("connected to db");
})
.catch((err)=>{
       console.log(err);
});
//middleware for converting json object to javascript objec
app.use(express.json());

app.use(userRouter);


app.listen(port,()=>{
       console.log(`server running in http://localhost:${port}`);
})