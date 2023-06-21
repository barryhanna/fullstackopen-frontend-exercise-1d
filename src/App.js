import { useState } from 'react';

const Statistics = ({ stats }) => {
	return (
		<>
			<h3>statistics</h3>
			<p>good {stats.good}</p>
			<p>neutral {stats.neutral}</p>
			<p>bad {stats.bad}</p>
			<p>all {stats.total}</p>
			<p>average {stats.average}</p>
			<p>positive {stats.positive}%</p>
		</>
	);
};

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleClick = (e) => {
		const { innerText: buttonVal } = e.target;
		console.log(buttonVal);
		switch (buttonVal) {
			case 'good':
				const newGood = good + 1;
				setGood(newGood);
				break;
			case 'bad':
				const newBad = bad + 1;
				setBad(newBad);
				break;
			case 'neutral':
				const newNeutral = neutral + 1;
				setNeutral(newNeutral);
				break;
			default:
				return;
		}
	};

	const total = good + bad + neutral;
	const average = (good * 1 + neutral * 0 + bad * -1) / total;
	const positive = (good / total) * 100;

	return (
		<div>
			<div>
				<h3>give feedback</h3>
				<button onClick={handleClick}>good</button>
				<button onClick={handleClick}>neutral</button>
				<button onClick={handleClick}>bad</button>
			</div>
			<div>
				<Statistics
					stats={{ good, bad, neutral, total, average, positive }}
				/>
			</div>
		</div>
	);
}

export default App;
