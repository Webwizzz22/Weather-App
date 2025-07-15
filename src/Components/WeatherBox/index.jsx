import Search from "../Search";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { FaSearch } from "react-icons/fa";
import { FaCloud, FaCloudShowersHeavy } from "react-icons/fa6";

export default function Weatherbox({ onWeatherStateChange, handleclick }) {
  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(false);
  const [weatherdata, setweatherdata] = useState(null);
  const [searchopen, setsearchopen] = useState(false);

  useEffect(() => {
    fetchweatherdata("bangalore");
  }, []);

  async function fetchweatherdata(param) {
    setloading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=`
      );
      const data = await response.json();
      if (data) {
        setweatherdata(data);
        setloading(false);

        if (onWeatherStateChange && data.weather && data.weather[0]) {
          onWeatherStateChange(data.weather[0].main);
        }
        console.log(data);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  }

  async function handlesearch() {
    fetchweatherdata(search);
  }

  async function handleclick() {
    setsearchopen(!searchopen);
  }

  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className=" w-auto max-w-[100vw]  h-[100vh] overflow-hidden flex flex-row border-2  ">
          <div className="  min-h-[100vh]  w-3/4 right-0  flex flex-col p-5 gap-10 ">
            <FaSearch
              onClick={handleclick}
              className="w-11 h-11 text-white cursor-pointer"
            />
            <div>
              <h2 className="text-7xl font-bold font-sans text-blue-950 p-2">
                {weatherdata?.name}
                <span>,{weatherdata?.sys?.country}</span>
              </h2>

              <h5 className="text-2xl font-mono flex flex-row gap-4  items-center font-medium text-blue-950 p-2 w-[200px] ">
                {Math.floor(weatherdata?.main?.temp - 273.15)} Celsius{" "}
                <span className="p-0 m-0 text-white/70 align-middle ">
                  <FaCloud />
                
                </span>
              </h5>
            </div>
          </div>
          {searchopen ? (
            <Search
              search={search}
              setsearch={setSearch}
              handlesearch={handlesearch}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
