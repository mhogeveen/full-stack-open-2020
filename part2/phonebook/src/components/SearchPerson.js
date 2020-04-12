import React from 'react'

const SearchPerson = ({ newMatch, handleMatchChange }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            filter shown with:
          </td>
          <td>
            <input
              value={newMatch}
              onChange={handleMatchChange}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default SearchPerson
