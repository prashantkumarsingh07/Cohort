// function onDone(){
// console.log("read the file ");

// }

const fs= require('fs');  // importing the fs module

fs.readFile("a.txt","utf-8",function(err,data){   // using the readFile function of fs module.
   if(err)
   {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

let sum=0;
console.log("hello");

for(let i=0;i<10000000000;i++)
{
  sum+=i;
}

console.log(sum);


