import { useEffect, useState } from "react"



export default function Search({search,setsearch,handlesearch}){


 function handleKeyDown(event) {
    if (event.key === "Enter") {
      handlesearch();
    }
  }

    return <div  className="bg-gray-800/20 backdrop-blur-3xl
      w-full sm:w-1/3 md:w-1/3 lg:w-1/3
       flex flex-col justify-center items-center
      rounded-bl-lg overflow-hidden
     gap-5 z-50
      max-w-xl transit">
    <div className=" flex ">
        <input  name="search" type="text" className="city-search  flex  p-1 rounded-sm" value={search} placeholder="Enter City Name" onChange={(event)=>setsearch(event.target.value)}
               onKeyDown={handleKeyDown}   />
        
    </div>
    <button className="searchbutton bg-gray-900  text-white p-3  rounded-2xl " onClick={handlesearch}>Search City's Weather</button>
    <div className="text-black text-sm mt-2 tracking-wide animate-bounce flex w-full p-2 align-middle text-center justify-center">
        Try searching for your favorite city!
      </div>
    </div>
    
}