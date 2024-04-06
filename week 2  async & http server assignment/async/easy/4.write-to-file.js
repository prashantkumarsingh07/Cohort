/*## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

const fs = require("fs");

const daataa ="jnmksaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakjkkkkkklololopks7RONALDOGEOGINA";

fs.writeFile("a.txt",daataa,"utf-8",function(err,data){
  if(err)
  console.log("Error writing file:",err);
  else
  console.log("file written succesfully (asynchronously)");

})
console.log("hello ji");




fs.readFile("a.txt","utf-8",function(err,data){
  if(err)
  console.log("error in reading:",err);
else
 console.log(":",data);
})

let sum=0;
for(let i=0;i<10000000000;i++)
{
  sum+=i;
}

console.log(sum);