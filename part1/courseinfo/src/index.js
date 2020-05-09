import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course['name']}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part['name']} {props.part['exercises']}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.course['parts'].map(part => <Part part={part} />)}
    </div>
  )
}

const Total = (props) => {
  const [a, b, c] = props.course['parts'].map(part => part['exercises'])
  return (
    <div>
      <p>Number of exercises {a + b + c}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))