import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  const name = props.person['name']
  const age = props.person['age']
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old.</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const alice = { name: 'Alice', age: 10 }
  const bob = { name: 'Bob', age: 10 }

  const [ counter, setCounter ] = useState(0)
  const handleClickPlus = () => setCounter(counter + 1)
  const handleClickReset = () => setCounter(0)

  return (
    <div>
      <h1>Greetings</h1>
      <Hello person={alice} />
      <Hello person={bob} />

      <Display counter={counter} />
      <Button handleClick={handleClickPlus} text="Plus" />
      <Button handleClick={handleClickReset} text="Reset"/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)