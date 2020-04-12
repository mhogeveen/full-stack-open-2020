import React from 'react'

const WeatherInfo = ({ matched, weather, loading }) => {
   const { temperature, weather_icons, wind_speed, wind_dir } = weather
   if (loading) {
      return <p>loading weather ...</p>
   } else {
      return (
         <>
            <h2>Weather in {matched.capital}</h2>
            <p>
               <strong>temperature: </strong>
               {temperature} Celsius
            </p>
            <img src={weather_icons} style={{ maxWidth: 100 }} alt='' />
            <p>
               <strong>wind: </strong>
               {wind_speed} kmph direction {wind_dir}
            </p>
         </>
      )
   }
}

export default WeatherInfo
