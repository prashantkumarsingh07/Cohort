
const express = require("express");
const zod = require("zod");

const app= express();

app.use(express.json()); // if not used this middleware body is not .

app.post("/health-checkup",function(req,res) {

  const kidneys= req.body.kidneys;
  const kidneyslength= kidneys.length;

  res.send("you have "+kidneyslength+ "kidneys");
  
})

// ## global catches ## - used so cleint not read files if server crashes. Its another kind of middleware. its takes 4 input.

app.use(function(err,req,res,next){

res.json({
  msg: "sorry something went wrong with our server"
})
})

app.listen(3000);  






// ##  ZOD -   for input validation. ##


const express = require("express");
const zod = require("zod");

const schema = zod.array(zod.number()) // this is like defining a function, written accor to user input or use case.//need to spend some time here to learn how to create schemas

const app= express();

app.use(express.json()); // if not used this middleware body is not .

app.post("/health-checkup",function(req,res) {

  const kidneys= req.body.kidneys;
  const response = schema.safeParse(kidneys); // this line is doing all if, else checks kind of things.
  
  if(!response.success)
  {
    res.status(411).json({
      msg: "input in invalid"
    })
  }
  else{

    res.send({
      response
    })
  }
 
  
  
})











app.listen(3000);