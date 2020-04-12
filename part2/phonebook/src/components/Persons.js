import React from 'react'

import Person from './Person'

const Persons = ({ persons, deletePerson }) => {
   return (
      <table>
         <tbody>
            {persons.map((person, i) => (
               <Person key={i} person={person} deletePerson={deletePerson} />
            ))}
         </tbody>
      </table>
   )
}

export default Persons
