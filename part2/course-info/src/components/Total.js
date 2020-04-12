import React from 'react'

const Total = ({ parts }) => {

  const totalExercises = () => {
    return parts.map(part => part.exercises).reduce((total, value) => total + value)
  }

  return (
    <>
      <p>
        <strong>
          Total of {totalExercises()} exercises
        </strong>
      </p>
    </>
  )
}

export default Total
