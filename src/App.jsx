import { useState } from 'react'
import Search from './Components/Search'
import Weatherbox from './Components/WeatherBox'
import "./App.css"



function App() {
  

  return (
    <>
    <div style={{
      width:"100vw",height:"100vh"
    }} className="maincontainer  bg-[url(https://images.unsplash.com/photo-1473054056026-1480d2d09ac2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] text-white flex flex-row m-0 p-0 justify-between ">
       <Weatherbox/>
        <Search/>
   
    </div>

  
    </>
  )
}

export default App
