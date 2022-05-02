import React, {useState} from "react";
import axios from 'axios';

function App() {

const [data, setData] = useState({})
const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&units=metric&appid=a41c569669568d7c80af572b60e7ae8e`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
    axios.get(url).then((response) => {

      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder='Escribe un lugar'
        onKeyPress={searchLocation}
        type="text" />
      </div>
     <div className="container">
       <div className="top">
         <div className="location">
           <p>{data.name} </p>
         </div>
         <div className="temp">
           {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
         </div>
         <div className="description">
           {data.weather ? <p>{data.weather[0].description} </p> : null}
         </div>
         <div className="min-max">
             {data.main ? <p className="bold">{data.main.temp_min.toFixed()}°C min</p> : null}
             {data.main ? <p className="bold">{data.main.temp_max.toFixed()}°C max</p> : null}
           </div>
         </div>
         {data.name !== undefined && 
         <div className="bottom">
         <div className="sensacion">
           {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
           <p>Sensación</p>
         </div>
         <div className="humedad">
         {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
           <p> Humedad</p>
         </div>
         <div className="viento">
         {data.wind ? <p className="bold">{data.wind.speed.toFixed()}Km/h</p> : null}
           <p>Viento</p>
         </div>
      </div>
      }
           

         </div>
    </div>
  );
}

export default App;
