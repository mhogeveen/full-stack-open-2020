import React from 'react'

import NoOutput from './NoOutput'
import CountryList from './CountryList'
import Country from './Country'

const Output = ({ matched, handleItemClick, api_key }) => {
   if (matched.length === 1) {
      return <Country matched={matched} api_key={api_key} />
   } else if (matched.length > 9) {
      return <NoOutput />
   } else {
      return <CountryList matched={matched} handleItemClick={handleItemClick} />
   }
}

export default Output
