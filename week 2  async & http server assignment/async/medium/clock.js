

function clock(){

  let now=new Date();

  let h= now.getHours().toString().padStart(2,'0');
  let m= now.getMinutes().toString().padStart(2,'0');
  let s= now.getSeconds().toString().padStart(2,'0');
   console.clear();
  console.log("("+h+":"+m+":"+s+")");
  

}

setInterval(clock,1000);
