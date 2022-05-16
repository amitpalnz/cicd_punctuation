const express = require("express");

const server =express();

const dotenv =require("dotenv");
dotenv.config();

const port= process.env.PORT || 8000;


const punctuation = require("./punctuation.js");

server.use(express.json());

server.listen(port,()=>{
  console.log("Listening to port", port);
})

server.get('/punctuation/:input',(req, res)=>{
  const input=req.params.input;
  
  res.send(punctuation(input));
}
) 