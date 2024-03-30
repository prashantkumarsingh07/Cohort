

const fs= require("fs"); 

fs.readFile("file.txt","utf-8",function(err,data){
  if(err)
  {
    console.log("The error is:"+err);
    return;
  }
  
  console.log("input data was: "+data);
   const readData= data.replace(/\s+/g, ' ');
  //  console.log(readData);
 
  fs.writeFile("file.txt",readData,"utf-8",function(err,data)
  {
    if(err)
    console.log("an error occured"+err);
    else
    console.log("updated to file asynchronously: "+readData);
  })
})
