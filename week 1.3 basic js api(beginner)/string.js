// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// slice() & split() are used frequently.

// Run each function to see the output, play and learn by doing.

// Length

 const str="prashantkumarsingh";
 console.log(str.length);      // output = 18

// indexOf

   const w ="hello world";
 console.log(w.indexOf("world"));     // output = 6



 // lastIndexOf

 const v= "hello world world world world";
  console.log(v.lastIndexOf("world"));            // output= 24


 // slice  & // substring   - They both do same thing


  const val = "har har mahadev";
 console.log(val.slice(2,8));   

// output => r har  // it include ele at index 2 and till efore index 8.

 console.log(val.substring(2,8)); 

// output => r har  // it include ele at index 2 and till efore index 8.


 // replace

 const st = "Hello world";
 console.log(st.replace("world","Javascript")); // output -> Hello Javascript



 // split   v imp 


 const s ="Ronaldo is a goat";
 console.log(s.split(" "));    

// output -> [ 'Ronaldo' , 'is' , 'a' , 'goat' ];  it will split the string in array  at what ele you want to split. 

 // trim

 const value ="     jai hind       ";
 console.log(value.trim()); 

// o/p -> jai hind   // it will trim the extra spaces from start and end not in middle of the string.


// toUpperCase


 const str1 = "prashant";
 console.log(str1.toUpperCase());  // o/p -> PRASHANT

// toLowerCase

 const strr="NATARAJAN";
 console.log(strr.toLowerCase()); // o/p-> natarajan


