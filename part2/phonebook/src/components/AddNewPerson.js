import React from 'react'

import ActionMessage from './ActionMessage'

const AddNewPerson = ({
   addPerson,
   newName,
   newNumber,
   handleNameChange,
   handleNumberChange,
   message,
   error,
}) => {
   return (
      <div>
         <form onSubmit={addPerson}>
            <table>
               <tbody>
                  <tr>
                     <td>name:</td>
                     <td>
                        <input value={newName} onChange={handleNameChange} />
                     </td>
                  </tr>
                  <tr>
                     <td>number:</td>
                     <td>
                        <input
                           value={newNumber}
                           onChange={handleNumberChange}
                        />
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <button type='submit'>add</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </form>
         <ActionMessage message={message} error={error} />
      </div>
   )
}

export default AddNewPerson
