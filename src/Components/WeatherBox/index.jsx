import Search from '../Search'
import { useEffect, useState } from "react"
import Loading from '../Loading'
export default function Weatherbox(){


    const[search,setSearch]=useState("")
    const [loading,setloading]=useState(false)
    const[weatherdata,setweatherdata]=useState(null)
  
useEffect(()=>{
    fetchweatherdata('bangalore')
},[])
    async function  fetchweatherdata(param) {
        setloading(true)
        try{
               const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=3dfca5c0ec05638c2aec5f04d3257c78`)
        const data = await response.json()
        if(data){
            setweatherdata(data)
            setloading(false)
            console.log(data)
        }
      
        }catch(e){
            console.log(e)
            setloading(false)
        }
    }
      async function handlesearch(){
     fetchweatherdata(search)


    }

    return <div className="background-image 
   bg-cover z-0 bg-transparent flex
   flex-row-reverse gap-[600px]" style={{
    width:"100vw"
        
    }}>
        <Search
        search={search}
        setsearch={setSearch}
        handlesearch={handlesearch}

        />
{
   loading ? <div><Loading/></div> : <div>
    <div className=" text-white font-bold flex ">
        <h2>{weatherdata?.name}</h2>
    </div>
   </div>
}

    </div>
}