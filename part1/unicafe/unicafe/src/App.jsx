import { useState } from 'react'

// Jy was laaste op 1.7 unicafe step 2

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Statistics = (props) => {
    return (
        <div>

        </div>
    )
}

const StatisticLine = ({stat, value}) => {
    return (
        <div>{stat} {value}</div>
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

    const handleNeutralClick = () => {
      setNeutral(neutral + 1)
    }

    const total = good + neutral + bad;
    const average = (good * 1 + neutral * 0 + bad * -1) / total;
    const positive = (good / total) * 100;

  return (
      <div>
          <h1>give feedback</h1>
          <Button onClick={handleGoodClick} text="good" />
          <Button onClick={handleNeutralClick} text="neutral" />
          <Button onClick={handleBadClick} text="bad" />
          <h1>statistics</h1>
          <StatisticLine value={good} stat="good" />
          <StatisticLine value={neutral} stat="neutral" />
          <StatisticLine value={bad} stat="bad" />
          <StatisticLine value={total} stat="all" />
          <StatisticLine value={average} stat="average" />
          <StatisticLine value={`${positive} %`} stat="positive" />
      </div>
  )
}

export default App