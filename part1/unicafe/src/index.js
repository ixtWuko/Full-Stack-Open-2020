import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistic = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>
const Statistics = (props) => {
  const good = props.feedbackNumber.good
  const neutral = props.feedbackNumber.neutral
  const bad = props.feedbackNumber.bad
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <Statistic value={good} text="good" />
      <Statistic value={neutral} text="neutral" />
      <Statistic value={bad} text="bad" />
      <Statistic value={all} text="all" />
      <Statistic value={average} text="average" />
      <tr><td>positive</td><td>{positive}%</td></tr>
    </table>
  )
}

const App = () => {
  const [feedbackNumber, setFeedbackNumber] = useState({good: 0, neutral: 0, bad: 0})
  const feedbackGood = () => setFeedbackNumber({...feedbackNumber, good: feedbackNumber.good + 1})
  const feedbackNeutral = () => setFeedbackNumber({...feedbackNumber, neutral: feedbackNumber.neutral + 1})
  const feedbackBad = () => setFeedbackNumber({...feedbackNumber, bad: feedbackNumber.bad + 1})


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={feedbackGood} text="good" />
      <Button handleClick={feedbackNeutral} text="neutral" />
      <Button handleClick={feedbackBad} text="bad" />
      <h1>statistics</h1>
      <Statistics feedbackNumber={feedbackNumber} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))