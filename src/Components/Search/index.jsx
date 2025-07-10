import { useEffect, useState } from "react"



export default function Search({search,setsearch,handlesearch}){


   

    return <div  className="   Search-container 
    bg-transparent 
    backdrop-blur-[10px] 
    border-black
    border-2 
    z-20 
    w-full 
    max-w-[500px]
    min-w-[280px] 
    h-[100vh]
    
   
    
    flex 
    items-center 
    flex-col 
    justify-center 
    gap-4 
    sm:gap-[] 
    lg:gap-8
    rounded-lg
    shadow-lg
    px-0
    mx-0
  
  
    ">
    <div className="searchbox  w-max-[200px] ">
        <input  name="search" type="text" className="city-search text-black p-2" value={search} placeholder="Enter City Name" onChange={(event)=>setsearch(event.target.value)}/>
        
    </div>
    <button className="searchbutton bg-gray-900 p-2 border-2 border-white " onClick={handlesearch}>Search City's Weather</button>
    </div>
}