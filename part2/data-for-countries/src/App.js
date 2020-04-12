import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Output from './components/Output'

const App = () => {
   const [countries, setCountries] = useState([])
   const [search, setSearch] = useState('')
   const [matched, setMatched] = useState([])

   const api_key = process.env.REACT_APP_API_KEY

   useEffect(() => {
      axios //force break
         .get('https://restcountries.eu/rest/v2/all')
         .then((response) => {
            console.log('promise fulfilled')
            setCountries(response.data)
            setMatched(response.data)
         })
   }, [])

   const handleSearchChange = (e) => {
      setSearch(e.target.value)
      setMatched(
         countries.filter((country) =>
            country.name.toLowerCase().includes(e.target.value)
         )
      )
   }

   const handleItemClick = (name) => {
      setMatched(countries.filter((country) => country.name === name))
   }

   return (
      <div>
         <Search search={search} handleSearchChange={handleSearchChange} />
         <Output
            matched={matched}
            handleItemClick={handleItemClick}
            api_key={api_key}
         />
      </div>
   )
}

export default App
