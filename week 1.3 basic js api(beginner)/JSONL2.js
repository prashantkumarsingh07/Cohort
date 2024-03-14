// JSON - javascript object Notation

// this class is used  when a user wants to send its data . generally the data is in object form in js which is converted to string format using json class and similarly from string format to object using some json class functions.


// many times you get data from server in json string type format which we convert in js object using JSON class .


const user = '{ "name": "Prashant" , "age" : 22 , "gender": "male" }'

// parse()
console.log(JSON.parse(user));  // { name: "Prashant" , age : 22 , gender: "male" }

const user1 = { name: "Prashant" , age : 22 , gender: "male" }


// stringify()
console.log(JSON.stringify(user1));  // { name: "Prashant" , age : 22 , gender: "male" }