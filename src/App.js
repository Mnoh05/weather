
import React, {useState} from 'react';

import Nav from "./components/Nav";
import axios from "axios"


function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
          ).then (recurso => {
            console.log(recurso)
        if(recurso.data.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.data.main.temp_min),
            max: Math.round(recurso.data.main.temp_max),
            img: recurso.data.weather[0].icon,
            id: recurso.data.id,
            wind: recurso.data.wind.speed,
            temp: recurso.data.main.temp,
            name: recurso.data.name,
            weather: recurso.data.weather[0].main,
            clouds: recurso.data.clouds.all,
            latitud: recurso.data.coord.lat,
            longitud: recurso.data.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        }else{
          alert(`No se encontro la ciudad: ${ciudad}`);
        }
      });
  }

  return (
    <div className="App">
     <Nav />
    </div>
  );
}

export default App;
