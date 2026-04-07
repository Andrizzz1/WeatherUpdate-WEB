import NavBar from "./components/nav";
import Webcard from './components/webcard'
import { useEffect,useState } from "react";
const apikey = import.meta.env.VITE_open_weather_api;

function App(){
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null)
    const fetchData = async() =>{   
    try{
        const getData = await fetch( `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`)
        const data = await getData.json()

        if(data.length === 0){
        throw new Error("No Data Found")
        }
        const {lat, lon, name} = data[0]

        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)
        const weatherData = await weatherRes.json()
        setWeather({ ...weatherData, cityName: name });
    
        
    }catch(err){
        console.log(err)
        alert(err)
}

    }

    return<>
    
    <NavBar city={city} setCity={setCity} onSearch={fetchData}/>
    
    <div className="w-full flex justify-center">
        <Webcard weather={weather} />
    </div>
</>
}

export default App;