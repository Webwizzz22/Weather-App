import { useState } from "react";
import Search from "../Search";
import Weatherbox from "../WeatherBox";

export default function Main(){
    const [weatherstate,setweatherstate]=useState("rain")
    function handlebackground(){
        if (weatherstate=='Rain'){
            return "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMHJhaW58ZW58MHx8MHx8fDA%3D"

        }
        else if(weatherstate=='Clear'){
            return "https://images.unsplash.com/photo-1469365556835-3da3db4c253b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdWR5fGVufDB8fDB8fHww"
        }
        else if(weatherstate=='Clouds'){
            return "https://images.unsplash.com/uploads/14122598319144c6eac10/5f8e7ade?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    }
      function updateWeatherState(newState) {
        setweatherstate(newState);
    }
    return <div className="border-4 border-yellow-950 w-[100vw] h-[100vh] overflow-x-hidden md:min-w-[500px] sm:min-w-[300px]
    " style={{
        backgroundImage:`url(${handlebackground()})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}>
        
        <Weatherbox onWeatherStateChange={updateWeatherState}/>
    </div>
}