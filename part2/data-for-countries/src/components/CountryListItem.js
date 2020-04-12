import React from 'react'

const CountryListItem = ({ name, handleItemClick }) => {
   return (
      <div>
         {name}
         <button onClick={() => handleItemClick(name)}>show</button>
      </div>
   )
}

export default CountryListItem
