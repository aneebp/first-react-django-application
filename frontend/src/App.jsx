import React from "react"
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
// import Login from "./pages/login"
// import Register from "./pages/register"
// import Home from "./pages/home"
// import NotFount from "./pages/notFount"
// import ProtectedRoute from "./components/protectedRouter"
import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/register'
import NotFount from './pages/notFount'
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
              <Route path="/login" element={
              <ProtectedRoute>
                    <Home></Home>
              </ProtectedRoute>} />
              <Route path="/home" element={<Login></Login> } />
              <Route path="/registor" element={<Register></Register>} />
              <Route path="*" element={<NotFount></NotFount>} /> 
       </Routes>
       </BrowserRouter>
      {/* <BrowserRouter>
      <Routes>
        <Route
        path="/"
        element={
          // only the login user can enter the home
          <ProtectedRoute>
            <Home></Home>
          </ProtectedRoute>
        }
        >
        </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/registor" element={<Register></Register>}></Route>
          <Route path="*" element={<NotFount></NotFount>}></Route>
      </Routes>
      </BrowserRouter> */}
     
    </>
  )
}

export default App
