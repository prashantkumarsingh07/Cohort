 
// callback functions

// in js an argument could be a string ,number,boolean , or a function itself.

 function sq(n){
  return n*n;
 }
 function cb(n){
  return n*n*n;
 }

 function sumOfsomething(a,b,callback){
   
  console.log(callback);

  const val= callback(a);
  const val2= callback(b);
  return val+val2;
 }

 console.log(sumOfsomething(2,4,sq)); // passing func as an argument


 // ANONYMOUS FUNCTIONS

 // when you pass a whole function as argument you dont have to name it.
 // can we put the name - yes , but should we? no. reason as this function cant be call from outside.

 
 function cb(n){
  return n*n*n;
 }

 function sumOfsomething(a,b,callback){
   
  console.log(callback);            // o/p -> [Function (anonymous)]

  const val= callback(a);
  const val2= callback(b);
  return val+val2;
 }

 console.log(sumOfsomething(2,4,function (n){             // o/p -> 20
  return n*n;
 })); 