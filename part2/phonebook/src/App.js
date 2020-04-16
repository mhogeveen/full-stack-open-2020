import React, { useState, useEffect } from 'react'

import personsServices from './services/persons'

import Title from './components/Title'
import SearchPerson from './components/SearchPerson'
import AddNewPerson from './components/AddNewPerson'
import Persons from './components/Persons'

const App = () => {
   const [persons, setPersons] = useState([])
   const [newName, setNewName] = useState('')
   const [newNumber, setNewNumber] = useState('')
   const [match, setMatch] = useState('')
   const [message, setMessage] = useState('')
   const [error, setError] = useState('')

   useEffect(() => {
      personsServices //force break
         .getAll()
         .then((initialPersons) => {
            setPersons(initialPersons)
         })
   }, [])

   const addPerson = (e) => {
      e.preventDefault()
      const personObject = {
         name: newName,
         number: newNumber,
      }

      const nameMatch = persons.filter((person) => person.name === newName)
      const numberMatch = persons.filter((person) => person.number === newNumber)

      if (nameMatch.length === 0 && numberMatch.length === 0) {
         personsServices
            .create(personObject)
            .then((createdPerson) => {
               setPersons(persons.concat(createdPerson))
               setMessage(`Added ${newName}`)
               setTimeout(() => {
                  setMessage('')
               }, 4000)
               setNewName('')
               setNewNumber('')
               console.log('post succes')
            })
            .catch((error) => {
               setError(error.response.data.error)
               setTimeout(() => {
                  setError('')
               }, 4000)
            })
      } else if (nameMatch.length !== 0) {
         if (
            window.confirm(
               `${nameMatch[0].name} is already added to phonebook, replace the old number with a new one?`
            )
         ) {
            personsServices //force break
               .update(nameMatch[0].id, personObject)
               .then((alteredPerson) => {
                  setPersons(
                     persons.map((person) =>
                        person.id !== alteredPerson.id ? person : alteredPerson
                     )
                  )
                  setMessage(`Added new phonenumber to ${alteredPerson.name}`)
                  setTimeout(() => {
                     setMessage('')
                  }, 4000)
                  setNewName('')
                  setNewNumber('')
                  console.log('alteration success')
               })
               .catch((error) => {
                  setError(
                     `Information of ${nameMatch[0].name} has already been removed from the server. Please refresh the browser.`
                  )
                  setTimeout(() => {
                     setError('')
                  }, 4000)
               })
         }
      } else if (numberMatch.length !== 0) {
         setError(`${numberMatch[0].number} is already in the phonebook under a different name.`)
         setTimeout(() => {
            setError('')
         }, 4000)
      }
   }

   const deletePerson = (toRemoveObject) => {
      if (window.confirm(`Delete ${toRemoveObject.name}?`)) {
         personsServices //force break
            .remove(toRemoveObject)
            .then(() => {
               setPersons(persons.filter((person) => person.id !== toRemoveObject.id))
               console.log('deletion succes')
            })
      }
   }

   const findMatched = persons.filter((person) => {
      return person.name.toLowerCase().includes(match)
   })

   const handleNameChange = (e) => {
      setNewName(e.target.value)
   }

   const handleNumberChange = (e) => {
      setNewNumber(e.target.value)
   }

   const handleMatchChange = (e) => {
      setMatch(e.target.value.toLowerCase())
   }

   return (
      <div>
         <Title text='Phonebook' type='h1' />
         <SearchPerson match={match} handleMatchChange={handleMatchChange} />
         <Title text='add a new' type='h2' />
         <AddNewPerson
            addPerson={addPerson}
            newName={newName}
            newNumber={newNumber}
            handleNameChange={handleNameChange}
            handleNumberChange={handleNumberChange}
            message={message}
            error={error}
         />
         <Title text='Numbers' type='h2' />
         <Persons persons={findMatched} deletePerson={deletePerson} />
      </div>
   )
}

export default App
