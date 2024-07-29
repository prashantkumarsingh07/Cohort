// Suspense API - when u have async component fetching, asynchronous data fetching.
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
const  Dashboard =  lazy(() => import('./Components/Dashboard'))
const   Landing = lazy(() => import('./Components/Landing'))


function App() {
  
  

  return (
    // Suspense API 
    <>
       
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route  path="/dashboard" element={<Suspense fallback={"...loading"}><Dashboard /></Suspense> } />
          <Route  path="/" element={<Suspense fallback={"...loading"}><Landing /></Suspense> } 
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar(){
  const navigate= useNavigate();
  return <div>
  <div >
   <button onClick={()=>{
    navigate("/");
   }}>LandingPage</button>

   <button onClick={ ()=>{
   navigate("/dashboard");
   }}>Dashboard</button>
  </div>
</div>
  
}

export default App
