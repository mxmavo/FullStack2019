import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const MostVoted = ({anecdotes, votes}) => {

	let maxVotes = votes.indexOf(Math.max(...votes));

	console.log('test' + votes);

	const isAllZero = votes.every(item => item === 0);

	//Check votes to display message or the most voted anecdote
	if ( isAllZero ) {
		return (
			<>
				<h2>
					Most voted
				</h2>
				<div>
					No votes yet
				</div>
			</>
		)
	}
	//Display the most voted anecdote
	return (
		<>
			<h2>
				Most voted
			</h2>
			{anecdotes[maxVotes]}
			<p>has {votes[maxVotes]} votes</p>
		</>
	)
}

//Button for defining the button
const Button = ({ onClick, text }) => (
	<button onClick={onClick}>
		{text}
	</button>
)

const App = (props) => {

	const numOfAnecdotes = props.anecdotes.length;
	//console.log(numOfAnecdotes);
	const [selected, setSelected] = useState(0)

	//creating zero-filled array of a desired length
	const [numOfVotes, countVotes] = useState(new Array(numOfAnecdotes).fill(0));


	//set votes to Anecdote
	const voteAnecdote = () => {

		//Example
		//const points = { 0: 1, 1: 3, 2: 4, 3: 2 }
		//const copy = { ...points }
		// increment the property 2 value by one
		//copy[2] += 1 

		const voted = [...numOfVotes];
		voted[selected]++;
		countVotes(voted);

	}

	//get Random anecdote
	const nextAnecdote = () => {
		
		let nextAnecdote = selected;
		console.log(nextAnecdote);

		while (nextAnecdote === selected) {
			nextAnecdote = Math.floor(Math.random() * numOfAnecdotes);
		}
		setSelected(nextAnecdote);
		
	}

	return (
		<div>
			<h1>Anecdote of the day</h1>
			{props.anecdotes[selected]}
			<p>has {numOfVotes[selected]} votes</p>
			<br/>
			<Button onClick={voteAnecdote} text="Vote" />
			<Button onClick={nextAnecdote} text="Next Anecdote" />

			<MostVoted votes={numOfVotes} anecdotes={anecdotes} />
		</div>
	)
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
	<App anecdotes={anecdotes} />,
	document.getElementById('root')
)