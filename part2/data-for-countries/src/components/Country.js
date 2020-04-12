import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CountryInfo from './CountryInfo'
import WeatherInfo from './WeatherInfo'

const Country = ({ matched, api_key }) => {
   const [weather, setWeather] = useState([])
   const [loading, setLoading] = useState(true)

   const [{ capital }] = matched

   useEffect(() => {
      axios //force break
         .get(
            `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}&units=m`
         )
         .then((response) => {
            setWeather(response.data.current)
            setLoading(false)
         })
   }, [])

   return (
      <>
         <CountryInfo matched={matched} />
         <WeatherInfo matched={matched} weather={weather} loading={loading} />
      </>
   )
}

export default Country
