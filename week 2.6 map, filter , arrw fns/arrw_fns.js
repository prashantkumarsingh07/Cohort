
     // Arrow function

 function sum(a,b){
   return a+b;
 }
 

  sum = (a,b) =>{
         return a+b;
 }

const a = sum(1,2);
console.log(a);




//       map , filter

// given an array give me new array in which every value is multiplied by two



const arr =[1,2,3,4,5];

const newArr=[];

for(let i=0;i<arr.length;i++)
{
  newArr.push(arr[i]*2);
}
console.log(newArr);



// map 


const  input =[1,2,3,4];

function transform(i){
 return i*2;
}

const ans=input.map(transform);



//  or by just directly passing transform


const input= [1,2,3,4];

const ans= input.map(function(i){
  return i*2;

})
console.log(ans);



// Filter


const input=[1,2,3,4,5,6];

const ans=input.filter(function(i){  // filter( (i) =>{ }) using arrw fncs
  if(i%2==0)
  return true;
else false;
})
console.log(ans);
