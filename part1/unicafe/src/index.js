import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const SectionHeader = (props) => {
  return (
    <>
      <h2>{props.text}</h2>
    </>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.sum > 0) {
    return (
      <table>
        <tbody>
          <Statistic
            text={props.g}
            value={props.good}
          />
          <Statistic
            text={props.n}
            value={props.neutral}
          />
          <Statistic
            text={props.b}
            value={props.bad}
          />
          <Statistic
            text="all"
            value={props.sum}
          />
          <Statistic
            text="average"
            value={props.avg}
          />
          <Statistic
            text="positive"
            value={props.pos + ' %'}
          />
        </tbody>
      </table>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const g = "good"
  const n = "neutral"
  const b = "bad"

  const setFeedback = feedback => {
    if (feedback === g) {
      setGood(good + 1)
    } else if (feedback === n) {
      setNeutral(neutral +1)
    } else if (feedback === b) {
      setBad(bad + 1)
    }
  }

  const sum = () => {
    return good + neutral + bad
  }

  const avg = () => {
    if (sum() === 0) {
      return 0
    } else {
      return (good + (-1 * bad)) / sum()
    }
  }

  const pos = () => {
    if (sum() === 0) {
      return 0
    } else {
      return (good / sum()) * 100
    }
  }

  return (
    <div>
      <SectionHeader
        text="give feedback"
      />
      <Button
        text={g}
        handleClick={ () => setFeedback(g) }
      />
      <Button
        text={n}
        handleClick={ () => setFeedback(n) }
      />
      <Button
        text={b}
        handleClick={ () => setFeedback(b) }
      />
      <SectionHeader
        text="statistics"
      />
      <Statistics
        g={g}
        n={n}
        b={b}
        good={good}
        neutral={neutral}
        bad={bad}
        sum={sum()}
        avg={avg()}
        pos={pos()}
      />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
