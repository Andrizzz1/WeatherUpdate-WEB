function Webcard({weather}){
    if (!weather) return <p>No Weather Data</p>
    const today = new Date();
    return<div className="bg-[linear-gradient(180deg,#1d8cf8_0%,#a4d8ff_100%)] w-5/12 max-lg:w-6/12 max-md:w-8/12 max-sm:w-9/12  h-90 rounded-2xl mt-5" >
        <div className="flex justify-between text-white p-3">
            <div >
                <p className="text-2xl font-semibold" id="CityName">{weather.cityName}</p>
                <p className="text-sm" id="date">{today.toLocaleDateString("en-US",{weekday:"short"})},{" "} 
                                {today.toLocaleDateString("en-US",{month:"short"})}{" "}
                                {today.getDate()}{" "}
                                {today.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:true})}</p>
            </div>
            <div className="text-sm flex items-center bg-white/20 backdrop-blur-md p-2 rounded-3xl">
                <img className="w-10" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                {weather.weather[0].description}
            </div>
        </div>
        <div className="text-white grid grid-cols-2 items-center">
            <div className="flex justify-center items-center h-64">
                <h1 id="Temp" className="text-8xl max-lg:text-7xl max-sm:text-6xl font-semibold">{Math.round(weather.main.temp)}°C</h1>
            </div>
            <div className="">
                <p id="skyLabel" className="text-2xl max-sm:text-xl font-semibold">{weather.weather[0].main}</p>
                <p className="text-sm">High {weather.main.temp_max}° • Low {weather.main.temp_min}°</p>
            </div>
        </div>
    </div>
}


export default Webcard;