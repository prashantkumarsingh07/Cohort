
// for(let  i=1 ; i<=1000;i++)
// {
//   console.log(i);
// }

// # VARIABLES in JS

// var a =1;
// console.log(a);

// var a=1;
// a=2;
// console.log(a); op-2

// let a=1;
// a=2;
// console.log(a); //op - 2

// const a = 1;
// a=2;
// console.log(a);  // type error

// # DATA TYPES IN JS

//  let name ="Prashant kumar Singh";
//  let firstname ="Prashant kumar Singh";
//  let age=21;
//  let isMarried=false;

//  console.log("This persons name is "+ name + "his age is"+ age) // name is depreciated

//  console.log("This persons name is "+ firstname + "his age is "+ age); 


// #  IF ELSE STATEMENTS

// let firstname ="Prashant kumar Singh";
//   let age=21;
//   let isMarried=false;
//   if( isMarried )
//   console.log("married");
// else
// console.log("not married");


//  # LOOPS

// Program to print 1 to 1000


// for( let i=1; i<=1000;i++)
// console.log(i);

// Program to print sum from 1 to 1000;

// let ans=0;
// for(let i=1;i<=1000;i++)
// {
//   ans+=i;
// }
// console.log(ans);

// wap to greet a person given their first name and last name

// let firstname="Prashant";
// let lastname="kumar";
// console.log("hello "+firstname +" "+lastname + " welcome to kirat cohort");

// # COMPLEX PRIMITIVES #//

//  ARRAYS & OBJECTS

// wap to print all the even nos in an array

// let arr = [1,2,3,4,5,6];
// let s=0;
// for(let a=0;a<arr.length;a++)
// {
//   s=arr[a];
//   if(s%2 ==0)
//   console.log(s);
// }

//  wap to build biggest number in an array
  
  //  let arr=[2,5,6,90,67,100];
  //  let s=0;
  //  let greater=0;
  //  for(let a=0;a<=arr.length;a++)
  //  {
  //       s=arr[a];
  //       if(s>greater)
  //       greater=s;
  //  }
  //  console.log(greater);

  // wap that reverse all the elements in an array

  // let arr=[1,2,3,4,5];
  
  // let temp=0;
  // let left=0;
  // let right=arr.length-1;
  
  
  // while(left<right)
  // {
   
  //   temp=arr[right];
  //   arr[right]=arr[left];
  //   arr[left]=temp;
  //   left++;
  //   right--;

  // }
  // console.log(arr);

  // # Object #

   const details ={
     firstName:"Prashant",
     age:"22",
    }

    console.log(details["firstName"]); 
    console.log(details["age"]); 

  //  Array of Objects

   const allusers =[
     {
       firstName:"Prashant",
       gender:"male",
      
     },
     {
       firstName:"Nitya",
       gender:"female",

     },
     {
      firstName:"chintu",
       gender:"male",

     }
   ];

   for(let i=0;i<allusers.length;i++)
   {
     if(allusers[i]["gender"]=="male")
     console.log(allusers[i]["firstName"]);
   }


  // # FUNCTIONS #


  
   function sum(a,b)
   {
    return a+b;
   }
  
   const value =sum(1,10);
   console.log(value);

  // Callback functions

   function sum(num1, num2) {
     let result = num1 + num2;
     return result;
 }

 function displayResult(data) {
     console.log("Result of the sum is : " + data);
 }

 function displayResultPassive(data) {
     console.log("Sum's result is : " + data);
 }

// You are only allowed to call one function after this
// How will you displayResult of a sum

 displayResult(sum(1,2)); // this is also right.

function sum(num1, num2,fnTocall) {
  let result = num1 + num2;
   // return result;
  fnTocall(result);
 }

 function displayResult(data) {
   console.log("Result of the sum is : " + data);
 }

 function displayResultPassive(data) {
   console.log("Sum's result is : " + data);
 }
// You are only allowed to call one function after this
// How will you displayResult of a sum

// callback -> when a funtion is passed as an argument inside another funtion.

 const ans= sum(1,2,displayResultPassive);


// Ex - callback example using setTimeout

  function greet(){
   console.log("hi prashant");
  }

//   setTimeout(greet , 4*1000); // after 4 sec it will call greet fun

// setInterval( func , duration) 


// ### ASSIGNMENT WEEK 1.2;

// (Q1) Create a counter which counts from 30 to 1

 let count=30;
 function counter()
 {
   if(count>0)
   {
  console.log(count);
   count-=1;
   }
 
  
 
}

 setInterval(counter,1*1000);


// (Q2) Find the actual time setTimeout will take to call the function.

 function greet(){
   
     console.log("hi prashant");
    console.log("settimeout called the functio after "+ time +" seconds");
    }
  
    setTimeout(greet , 5*1000); // setTimeout take approximately 5 sec depends on various factors
    let time=1;
     function cal()
     {
       if(time<6)
       time++;
     }
    setInterval(cal,1*1000);  

//  (Q3) Create a terminal clock in js

function updateClock ()
{
  let now = new Date();
  let hours= now.getHours().toString().padStart(2,'0');
  let min= now.getMinutes().toString().padStart(2,'0');
  let sec= now.getSeconds().toString().padStart(2,'0');
  
  let time= "("+hours+":"+min+":"+sec+")";
  console.clear();
  console.log(time);
}
setInterval(updateClock,1000);