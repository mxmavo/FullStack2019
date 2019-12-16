import React from 'react'
import ReactDOM from 'react-dom'


// Refactor the code so that it consists of three new components: Header, Content, and Total.

// All data still resides in the App component, which passes the necessary data to each component using props.

// Header takes care of rendering the name of the course

const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}

// Content renders the parts and their number of exercises
const Content = (props) => {
	return (
		<div>
			<Part part={props.parts[0]} />
			<Part part={props.parts[1]} />
			<Part part={props.parts[2]} />
		</div>
		
	)
}

// Refactor the Content component so that it does not render any names of parts or their number 
//of exercises by itself. Instead it only renders three Part components of which each renders
// the name and number of exercises of one part.
const Part = (props) => {
	return (
		<>
			<p>
				{props.part.name}: <strong>{props.part.exercises}</strong>
			</p>
		</>
	)

}

// Total renders the total amount of exercises.
const Total = (props) => {
	return (
		<>
			<p>Number of exercises: <strong>{props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</strong></p>
		</>
	)
}


const App = () => {

	//start definitions
	// const course = 'Half Stack application development'
	// const part1 = 'Fundamentals of React'
	// const exercises1 = 10
	// const part2 = 'Using props to pass data'
	// const exercises2 = 7
	// const part3 = 'State of a component'
	// const exercises3 = 14

	// const-definition for course in object
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
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))