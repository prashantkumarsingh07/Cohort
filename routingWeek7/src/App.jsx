
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './Components/Dashboard'
import { Landing } from './Components/Landing'

function App() {
  
  

  return (
    <>
       
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route  path="/dashboard" element={<Dashboard /> } />
          <Route  path="/" element={<Landing /> } />
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
