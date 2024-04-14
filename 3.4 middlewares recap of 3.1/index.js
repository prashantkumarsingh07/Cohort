const express = require("express");

const app=express();

//    NORMAL WAY WITHOUT A MIDDLEWARE ....using a normal function



function isOldenough(age)
{
  if(age>=14)
  {
    return true;
  }
  else{
    return false;
  }
}

app.get("/ride",function(req,res){
   if(isOldenough(req.query.age))
    {
    res.json({
    msg:  "you have successfuly booked the ride 1 ",
    })
    }
  else
   {
    res.status(411).json({
     msg: " sorry u dont have right age", 
    })
   }
})


app.listen(3000);


// USING  A MIDDLEWARE - a better way


const express = require("express");

const app=express();


function isOldenoughmiddleware(req,res,next)
{
    const age = req.query.age;
    if(age>=14)
    {
      next();
    }
    else{
      res.status(411).json("sorry u are underaged");
    }
}


app.get("/ride1",isOldenoughmiddleware,function(req,res){
  res.json({
    msg: "succesfully riden the ride 1",
  })
})
app.get("/ride2",isOldenoughmiddleware,function(req,res){
  res.json({
    msg: "succesfully riden the ride 2",
  })
})


app.listen(3000);

// some more things which are there  1) if u know a certain middleware is used in all routes the use    " app.use(isOldenoughmiddleware)  " on the top of get requests 2), as order mattters, get requests above this app.use() will not use middleware . 3) or if introduce app.use() at the bottom its pretty useless.