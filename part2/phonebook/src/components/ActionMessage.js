import React from 'react'

const ActionMessage = ({ message, error }) => {
   if (message.length > 0) {
      return (
         <div className='action message'>
            <p>{message}</p>
         </div>
      )
   } else if (error.length > 0) {
      return (
         <div className='action error'>
            <p>{error}</p>
         </div>
      )
   } else {
      return null
   }
}

export default ActionMessage
