import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
const HomePage = () => {
    const Nav=useNavigate()
    const sd=useLocation();
    const [user,setuser]=useState(null)
    const check= localStorage.getItem("user")
    useEffect(()=>{
  
     if(!check){
          Nav("/")
     }
     if(user==null && check){
         const data=JSON.parse(check);
         setuser(data?data?.user:sd.state?.user)
     }
    },[check])
    console.log(sd.state,"pro")
  return <>
  <h1 style={{textAlign:"center"}}>Welcome {user?user:"no user"}</h1>
  </>
}

export default HomePage