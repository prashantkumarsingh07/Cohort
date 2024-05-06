
 //                                        useState  && useEffect.
  

//import { useEffect,useState } from "react";
// import axios from "axios";

 /*


function App() {
 const [todos,setTodos] = useState([])

 useEffect(()=>{
  axios.get("https://sum-server.100xdevs.com/todos")
  .then(function(response){
    setTodos(response.data.todos)
  })
 },[]);
  
  return  <div>
      {
        todos.map(todo=> <Todo  key={todo.id}  title={todo.title} description={todo.description} />) 
      }
      </div>
   }



function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h4>
      {description}
    </h4>
 </div>
}

*/

//                                            useEffect

/*

  function App(){
    const [selectedId,setSelectedId] = useState(1);
    return <>
         <button onClick={function(){
            setSelectedId(1)
         }}>1</button>
         <button onClick={function(){
          setSelectedId(2)
         }}>2</button>
         <button onClick={ function(){
          setSelectedId(3)
         }}>3</button>
         <button onClick={function(){
          setSelectedId(4)
         }}>4</button>
        <Todo id={selectedId}/>
    </>
  }

  function Todo({id}){
    const [todo, setTodo] = useState({});

    useEffect(()=>{
       axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
       .then(function(response){
        setTodo(response.data.todo)


       })
    },[id])   // if this dependency array is [] empty it will run only once.
    return <>
        Id:{id}
       <h1>{todo.title}</h1>
       <h4>{todo.description}</h4>
    </>
  }





export default App;

*/

 
//                                         useMemo

/*

  import { useMemo } from "react";
import { useState } from "react";

  function App(){
    const [count,setCount]= useState(0);
    const [inputval,setinputValue] = useState(1);

    // approach without useMemo

     let sum = 0;
     for(let i=1;i<=inputval;i++) // but this expensive operation run after every render
       {                          // this is where useMemo is used .
                                 // when we want last saved value.
         sum=sum+i;    
       }



    // useMemo



     let sum = useMemo(() =>{
        let cnt=0;
        for(let i=0;i<=inputval;i++)
         {
           cnt=cnt+i;
         }
         return cnt;
     },[inputval]);    

     // *same thing can be done using useEffect also but it will into new state variable.*


            
   return <div>
        <input onChange={function(e){
          setinputValue(e.target.value); // it will give u actual value inside the input block.

        }} placeholder="enter a number"></input>
        <h4> Sum from 1 to {inputval} is {sum} </h4>
        <button onClick={function counter(){
          setCount(count+1);
        }}>Counter ({count})</button>
   </div>
  }

 export default App;


 */


 //                                         useCallback


 /*
 import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  function onClick() {
    console.log("child clicked")
  }

  return <div>
    <Child onClick={onClick} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({onClick}) => {
  console.log("child render")

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})

export default App;

*/


// Notes

/*
1. useEffect - used when u want to do an side effect.
2. useMemo - we use it t update an value and store in a variable , as it avoids rerendering, makes our app optimized.

3. useCallback - not clear.

4. memo - its not a hook , as we know if a parent render , then child also renders.  & if u have a static code & it dont require any dynamic work , u can put the code inside memo. 












*/