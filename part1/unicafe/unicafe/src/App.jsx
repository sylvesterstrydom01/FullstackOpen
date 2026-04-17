import { useState } from 'react'

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
    if (total === 0) {
        return (
            <div>
                <h4>No feedback gathered yet</h4>
            </div>
        )
    }
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text="good" value={good} />
                    <StatisticLine text="neutral" value={neutral} />
                    <StatisticLine text="bad" value={bad} />
                    <StatisticLine text="total" value={total} />
                    <StatisticLine text="average" value={average} />
                    <StatisticLine text="positive" value={`${positive}%`} />
                </tbody>
            </table>
        </div>
    )
}

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
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
          <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
      </div>
  )
}

export default App