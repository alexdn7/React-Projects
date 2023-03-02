import React, {useState} from 'react'
import axios from 'axios'

export default function App () {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  
  const pid = '';
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + pid;
  
  const handleChange = (event) => {
    if(event.key === 'Enter') {
      setLocation('Miami')
      axios.get(url).then((response) => {
        setWeather(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div>
      <input type = 'text'
        placeholder = 'Introdu numele orasului'
        value = {location}
        onChange = {event => setLocation(event.target.value)}
        onKeyDown ={handleChange}
      />
      {weather.main ? <div>
                                  <p> {weather.name} </p>
                                  <p> {Math.floor(weather.main.temp - 273.15)}°C  </p>
                                 </div> : 
                                 null
     }
    </div>
  )
}