import React from 'react';
import Course from './components/Course'

const App = (props) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {props.courses.map(course => <Course course={course} key={course.id} />)}
    </div>
  )
}

export default App;