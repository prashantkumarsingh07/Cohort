/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
 const a = new Promise(function(resolve){
  setTimeout(resolve,t*1000);
 })
 return a;
}

function wait2(t) {
  const b = new Promise(function(resolve){
    setTimeout(resolve,t*1000);
   })
   return b;
}

function wait3(t) {
  const c = new Promise(function(resolve){
    setTimeout(resolve,t*1000);
   })
   return c;
}

function calculateTime(t1, t2, t3) {
  const now= new Date();
return wait1(t1).then(()=>wait2(t2) ).then(() => wait3(t3)).then(() => {
  return new Date() - now;
}) ;


}

module.exports = calculateTime;
