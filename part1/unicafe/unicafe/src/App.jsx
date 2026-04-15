import { useState } from 'react'

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const DisplayStat = ({stat, value}) => {
    return (
        <p>{stat} {value}</p>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
      setGood(good + 1)
    }

    const handleBadClick = () => {
      setBad(bad + 1)
    }

    const hanldeNeutralClick = () => {
      setNeutral(neutral + 1)
    }

  return (
      <div>
          <h1>give feedback</h1>
          <Button onClick={handleGoodClick} text="good" />
          <Button onClick={hanldeNeutralClick} text="neutral" />
          <Button onClick={handleBadClick} text="bad" />
          <h1>statistics</h1>
          <DisplayStat value={good} stat="good" />
          <DisplayStat value={neutral} stat="neutral" />
          <DisplayStat value={bad} stat="bad" />
      </div>
  )
}

export default App