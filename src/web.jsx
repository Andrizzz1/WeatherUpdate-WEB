import { useEffect,useState } from "react"

const apikey = import.meta.env.VITE_open_weather_api


function Web(){
   
}

export default Web;


//  const [weather, setWeather] = useState(null)
//     useEffect(()=>{
//         const fetchData = async() =>{
//              const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${apikey}`)
//              const data = await getData.json()
//              console.log(data)
//              setWeather(data)
//         }
//        fetchData()
//     },[])
//     return <div className="w-full  flex justify-center h-screen items-center " >    
//             <div className="bg-blue-500 w-2xl h-7/12 rounded-2xl">
//                 <input type="text" placeholder="Enter A PLACE" />
//             </div>
//             <div className="">
//                 <div id="name"></div>
//                 <div id="temp"></div>
//                 <div id="desc"></div>
//             </div> 
//     </div>