import { useEffect, useState } from "react"



export default function Search({search,setsearch,handlesearch}){


   

    return <div  className="Search-container  bg-transparent backdrop-blur-[7px] border-white border-2 z-50 w-[500px] m-0 p-0 flex items-center flex-col justify-center gap-10">
    <div className="searchbox ">
        <input  name="search" type="text" className="city-search" value={search} placeholder="Enter City Name" onChange={(event)=>setsearch(event.target.value)}/>
        
    </div>
    <button className="searchbutton bg-gray-900 p-2 border-2 border-white " onClick={handlesearch}>Search City's Weather</button>
    </div>
}