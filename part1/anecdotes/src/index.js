import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length + 1).join('0').split('').map(parseFloat))

  const setIndex = () => {
    setSelected( Math.floor(Math.random() * anecdotes.length) )
  }

  const addVote = () => {
    const points = [...votes]
    points[selected]++
    setVotes(points)
  }

  const indexOfMostVotes = (arr) => {
    let max = arr[0]
    let maxIndex = 0

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i
        max = arr[i]
      }
    }
    return maxIndex
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button
        handleClick={ () => addVote()}
        text="vote"
      />
      <Button
        handleClick={ () => setIndex()}
        text="next anecdote"
      />
      <h2>Anecdote with the most votes</h2>
      <p>{props.anecdotes[indexOfMostVotes(votes)]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
