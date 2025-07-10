import { useState } from 'react'

import Weatherbox from './Components/WeatherBox'
import "./App.css"



function App() {
  

  return (
    <>
    <div style={{
      width:"100vw",height:"100vh"
    }} className=" flex   w-full min-h-screen  maincontainer sm:text-white  md:text-white md:w-80 sm:w-90 bg-[url(https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMHJhaW58ZW58MHx8MHx8fDA%3D)] flex ">
       <Weatherbox/>
       
   
    </div>

  
    </>
  )
}

export default App
