import React,{useEffect,useState} from 'react'
import Error from "./Component/Error"
import {Routes as Switcher,Route,Navigate} from "react-router-dom"
import Login from './Component/Login'
import SignUp from './Component/SignUp'
import HomePage from './Component/HomePage'
import {useCookies} from "react-cookie"
function App() {
  const [user,setuser]=useState(null)
  const [cookie,setcookie]=useCookies();
  const check= localStorage.getItem("user")

  useEffect(()=>{

   if(check && user==null){
        setuser(check)
   }
  },[user])
  return (
    <div>
        <Switcher>
          <Route path='/'  element={user?<Navigate to="/home"/>:<SignUp/>} />
          <Route path='/login'  element={user?<Navigate to="/home"/>:<Login/>} />
          <Route path='/Home'  element={<HomePage/>} />
<Route path='*' element={<Error/>}  />
        </Switcher>
    </div>
  )
}

export default App