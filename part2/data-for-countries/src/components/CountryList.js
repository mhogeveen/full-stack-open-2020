import React from 'react'

import CountryListItem from './CountryListItem'

const CountryList = ({ matched, handleItemClick }) => {
   return (
      <>
         {matched.map((country, id) => {
            return (
               <CountryListItem
                  key={country.name}
                  name={country.name}
                  handleItemClick={handleItemClick}
               />
            )
         })}
      </>
   )
}

export default CountryList
