import React from 'react'

const CountryInfo = ({ matched }) => {
   const [{ name, capital, population, languages, flag }] = matched

   return (
      <>
         <h1>{name}</h1>
         <p>Capital: {capital}</p>
         <p>Population: {population}</p>
         <h2>Languages</h2>
         <ul>
            {languages.map((language, iso639_1) => (
               <li key={iso639_1}>{language.name}</li>
            ))}
         </ul>
         <img src={flag} style={{ maxWidth: 100 }} alt='' />
      </>
   )
}

export default CountryInfo
