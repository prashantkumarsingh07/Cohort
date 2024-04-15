// generating(sign) , decoding , verifying      are the three things which happens in auth via jwt.


// mishraji SBI manager issueing ccheck to kirat example, anyone can decode kirat cheque , but only mishraji verify the cheque, as they had generated it using machine.



// Another Example----------------------- 

const express = require("express");
const jwt = require("jsonwebtoken");  // jsonwebtoken a library
const jwtPassword = "123456";

const app = express();

app.use(express.json()); // body would not be decoded.

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExists=false;
  for(let i=0;i<ALL_USERS.length;i++)
  {
    if(ALL_USERS[i].username==username && ALL_USERS[i].password==password)
    {
      userExists=true;
    }
    
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword); // this is the function encrypting & tokennizing the given input , if user already exists in DB.
  return res.json({            // returning the token to end user. 
    token, 
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;  // it wanted u have kept ur token in authorization section inside header ,in postman or your website.
  try {
    const decoded = jwt.verify(token, jwtPassword);  // decoded will having user & iat field. know user is verified , so user can ask for anything.
    const username = decoded.username; // getting the username from the object.
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }

  res.json({
    users: ALL_USERS  // it would return all users
  })
});

app.listen(3000)