import React from "react"
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/register'
import NotFound from './pages/notFound'
import ProtectedRoute from './components/protectedRouter'


function Logout(){
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterandLogout(){
  localStorage.clear()
  return <Register></Register>
}

function App() {
  return (
    <>
       <BrowserRouter>
       <Routes>
              <Route path="/home" element={
              <ProtectedRoute>
                    <Home></Home>
              </ProtectedRoute>} />
              <Route path="/login" element={<Login></Login> } />
              <Route path="/logout" element={<Logout></Logout> } />
              <Route path="/register" element={<Register></Register>} />
              <Route path="*" element={<NotFound></NotFound>} /> 
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
