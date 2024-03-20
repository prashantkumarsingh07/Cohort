
                                          // 1. Callbacks

/* EX1
function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b) {
  let square1 = square(a);
  let square2 = square(b);
  return square1 + square2;
}
function sumOfcubes(a, b) {
  let cube1 = cube(a);
  let cube2 = cube(b);
  return cube1 + cube2;
}

let ans = sumOfSquares(1, 2);
console.log(ans);    // 5

let ans1 = sumOfcubes(1, 2);
console.log(ans1);    // 9

*/

// Good but there is a problem in this approach -> DRY(dont repeat yourself)

// EX2

function square(n) {
  console.log("square called");
  return n * n;
}

function cube(n) {
  console.log("square called");
  return n * n * n;
}

// created a Generic func for all oprations , implemented DRY , through CALLBACK
function sumOfSomething(a, b , fn) {
  let num = fn(a);
  let num2 = fn(b);
  return num + num2;
}

let res = sumOfSomething(1, 2,square); // here we are passing a function to another function.
console.log(res);    // 5

// we are able to make a GENERIC funtion using a CALLBACK in above example.

// EX1 and EX2 both are call back functions

// we dont need callbacks for synchronous task




                                         // Sync function
                
          // here only callstack will be filled

    function sum(a,b)
    {
      return a+b;
    }

    console.log(sum(1,2));//3
    console.log(sum(1,2));//3
    console.log(sum(1,2));//3

    // Problem in sync funtion when we need to assign js thread to do task which will take time.

     readFile("a.txt")  // js thread  request to O.S to read the file , if O.S dont allow, then  your thread will stuck there and not proceed further until it comes back. Thats why Async function used.

     console.log("hi there");






                                       //2. Async Functions

                // concept of callstack, web api , event loop , call back queue (latenflip.com) 

      // For above ex it says i(thread) will assign a task to a function that will do that task , until the file is read, js thread  will proceed and do my other task .

      // Async function is handled by web api not mainly by js as js is single threaded

      
     function onDone(content)
     {
      console.log(content);
     }

      readFile("a.txt",onDone) // async call , this is the real usecase of callback.
      

      console.log("hi there");

      for(let i=0;i<100;i++)
      {
        
      }

      //Ex of famous async functions-> setTimeout function ,readFile function ,these two function is already async func we did not need to add any keyword like async before them.
      // in Async function thread donst stuck 


      // Q) Can we create our own async functions ?
      // -> yes but under the hood we are just wraaping a webapi(async func ) inside a own made async function.


                                       // 3. PROMISES
      
// promises are just sintactical sugar over async, cleaner way of writing async func , under the hood promisses work as callbacks

// wrapping another Async func

function myOwnSetTimeout(fn, duration) {
  setTimeout(fn, duration);
}

myOwnSetTimeout(function() {
  console.log("log the first thing");
  myOwnSetTimeout(function() {
    console.log("log the second thing");
  }, 2000)
}, 1000)     //if more async func wrapped one after another then callback happen code become uglier
// to handle that we use PROMISES.

// using Promises

// defining a promise
function myOwnSetTimeout(duration) {
  let p = new Promise(function (resolve) {
    // after 1 second, call resolve
    setTimeout(resolve, 1000);
  });
  return p;
}


myOwnSetTimeout(1000)
  .then(function () {
    console.log("log the first thing");
  }); // calling a funtion tha returns a promise as we use 99% time this only

  // Ex 2 ->calling a funtion tha returns a promise as we use 99% time this only

  const ans= promisifiedmyOwnSettimeOut(1000);
  ans.then(
    function(){
      console.log("timeout is done");
    }                              /// calling a callback .
  );


  // # NOTE- 

/* we use sync code over asyc code until
1. do a network call.
2. sleep/wait for sometime.
3. read a file.
4. database call.

 in js we generally do 5% async code in which, do away with callbacks.
 & its good if we know how to call a promisified  fuunction */