// TRY CATCH : it is used where we know that it will give error , so to avoid uneven stopage of code execution we use TRY CATCH, means dont run error part , but runs other part.

try{                 
  let a;
  console.log(a);    // if error occurs here its next line would not run , BUT catch part runs
  console.log("hi there from inside of try");
}catch(e){                          // this will run always
  console.log("hi there from inside of catch");
}

// try catch syntax

console.log("hi there");