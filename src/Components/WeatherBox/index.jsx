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
               const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid={}`)
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

    return <div className=" flex flex-row-reverse  w-[100vw] " style={{
    
        
    }}>
        <Search
        search={search}
        setsearch={setSearch}
        handlesearch={handlesearch}

        />
{
   loading ? <div><Loading/></div> : <div className=' w-2/3  flex flex-col text-gray-700 align-middle justify-center gap-[150px] p-[30px]'>
    <div className=" text-white font-medium font-sans sm:text-8xl md:text-7xl lg:text-8xl ">
        <h2>{weatherdata?.name}<span>,{weatherdata?.sys?.country}</span></h2>
    </div>
    <div className="flex flex-row gap-5 w-[900px] rounded-xl p-5  text-gray-200 text-3xl font-medium bg-gray-500/50">
  
        <h5 className='flex flex-col gap-2 align-center justify-center w-[300px]  text-center'><span>Temperature </span>{Math.floor((weatherdata?.main?.temp)-273.15)} Celsius</h5>
        <h5 className='flex flex-col gap-2 align-center justify-center w-[300px]  text-center' ><span>Weather In {weatherdata?.name}</span >{weatherdata && weatherdata.weather[0] ? weatherdata.weather[0].main: null}</h5>
         <h5 className='flex flex-col gap-2 align-center justify-center w-[300px]  text-center' >{weatherdata && weatherdata.weather[0] ? weatherdata.weather[0].description: null}</h5>
    </div>
    </div>

    
  
  
}
 

    </div>
}


