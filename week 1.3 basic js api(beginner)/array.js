// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// functions to manipulate array.


// push

 const initialarray =[4,6,7,2];
 initialarray.push(10);             // o/p -> [4,6,7,2,10]
 console.log(initialarray);  

// pop

 const initialarray =[4,6,7,2];
 initialarray.pop();             // o/p -> [4,6,7]
 console.log(initialarray); 

// shift  

  const initialarray =[4,6,7,2];
  initialarray.shift();             // o/p -> [6,7,2]
  console.log(initialarray);  
 

// unshift

 const initialarray =[4,6,7,2];
  initialarray.unshift(10);             // o/p -> [10,4,6,7,2]
  console.log(initialarray);       

// concat

 const initialarray =[1,2,3];
 const secondarray =[4,5,6];
 const finalarray = initialarray.concat(secondarray);   // o/p -> [1,2,3,4,5,6]
// console.log(finalarray);

// forEach

  const initialarray =[1,2,3];

  function logThing(str)
  {
   console.log(str);
 }
 
  initialarray.forEach(logThing)  // o/p -> 1 2 3  , here forEach will call logthing 3 times. its a kind off callback function also.

// callbacks , map, filter, find , sort . will be covered later on in seperate session
