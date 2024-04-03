
const express = require('express') //importing  express from outside
const app = express()  //call express func & get in the app or creating something like object off express() method
const port = 3000     // defining the port that we would be using , a machine have single ip, but multiple ports aquired by different task.

//localhost:3000      '/' in app.get() indicates app want to hit this route(here its lochst:3000)
//localhost:3000/
app.get('/', (req, res) => {  // anytime request come to(or hit) / send them hello world
  res.send('Hello World!')
})

app.listen(port, () => { // the app will listened to port =3000 , whenever u are starting an http server u have to listent to this port
  console.log(`Example app listening on port ${port}`)
})