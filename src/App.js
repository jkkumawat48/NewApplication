import React, { useEffect, useState } from "react";
import './App.css';
import Home from './Component/Header';
import Login from './Component/Login'

const App=()=>{
  const[tokenActive,setTokenActive]=useState(null)
  const handleToken = ()=>{
    const token = localStorage.getItem("userLogin")
    if(token){
      setTokenActive(true)
    }
  }
  useEffect(()=>{
    console.log("okok")
  })
  return(
    <>
    {tokenActive ? <Home /> : <Login handleToken={handleToken} />}
    </>
  )
}
export default App;