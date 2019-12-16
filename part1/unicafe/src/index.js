import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Statistic for displaying a single statistic, e.g. the average score.
const Statistic = (props) => {
	return (
		<tr>
			<td>{props.text}</td>
				<td>{props.value}</td>
		</tr>
	)
} 

// Showmore statistics about the gathered feedback: the total number of collected feedback
// Refactor your application so that displaying the statistics is extracted into its own 
// Statistics component.
// a proper place to define a component
const Statistics = (props) => {

	//Change your application to display statistics only once feedback has been gathered.
	// Check the length of allClicks, if 0 show No feedback

	if (props.allClicks.length === 0) {
		return (
			<>
			<h2>
				Statistics
			</h2>
			<div>
				No feedback given
			</div>
			</>
		)
	}

	//Display the statistics in an HTML table
	return (
		<>
			<h2>
			Statistics
			</h2>
			<table>
				<tbody>
					<Statistic text="good" value ={props.good} />
					<Statistic text="neutral" value ={props.neutral} />
					<Statistic text="bad" value ={props.bad} />
					<Statistic text="total" value ={props.allClicks.length} />
					<Statistic text="average" value ={(props.good - props.bad)/props.allClicks.length} />
					<Statistic text="positive" value ={(props.good/props.allClicks.length)*100 + ' %'} />
				</tbody>
			</table>
		</>
	)
}

//Button for defining the buttons used for submitting feedback
const Button = ({ onClick, text }) => (
	<button onClick={onClick}>
		{text}
	</button>
)


const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [allClicks, setAll] = useState([])


	const storeGoodClick = () => {
		setAll(allClicks.concat('G'))
	setGood(good + 1)
	}

	const storeNeutralClick = () => {
		setAll(allClicks.concat('N'))
		setNeutral(neutral + 1)
	}

	const storeBadClick = () => {
		setAll(allClicks.concat('B'))
		setBad(bad + 1)
	}

	return (
	<div>
		<h1>Give feedback</h1>

		<Button onClick={storeGoodClick} text="good" />
		<Button onClick={storeNeutralClick} text="neutral" />
		<Button onClick={storeBadClick} text="bad" />

		<Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>

	</div>
	)
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)