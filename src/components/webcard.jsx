

function Webcard({weather}){
    if (!weather) return <p>No Weather Data</p>
    const today = new Date();
    return<div className="bg-[linear-gradient(180deg,#1d8cf8_0%,#a4d8ff_100%)] w-5/12 h-90 rounded-2xl mt-5" >
        <div>
            <div >
                <p id="CityName">{weather.cityName}</p>
                <p className="text-sm" id="date">{today.toLocaleDateString("en-US",{weekday:"short"})}, 
                                {today.toLocaleDateString("en-US",{month:"short"})}</p>
            </div>
        </div>
        <div>
            <h1 id="Temp">{weather.main.temp}</h1>
            <div>
                <p id="skyLabel"></p>
            </div>
        </div>
    </div>
}


export default Webcard;