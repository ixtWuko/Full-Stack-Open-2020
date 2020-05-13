import React from 'react'

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  )
}

const Header = (props) => <h2>{props.course.name}</h2>

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map(part => <Part part={part} key={part.id} />)}
    </div>
  )
}

const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>

const Total = (props) => {
  const total = props.course.parts.reduce( (sum, part) => {
    sum.exercises += part.exercises
    return sum
  }).exercises
  return (
    <p>total of {total} exercises</p>
  )
}

export default Course;