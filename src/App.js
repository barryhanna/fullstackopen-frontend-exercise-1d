import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
	return (
		<p>
			{text} {value}
		</p>
	);
};

const Statistics = ({ stats }) => {
	return (
		<>
			<h3>statistics</h3>
			<StatisticLine text="good" value={stats.good} />
			<StatisticLine text="neutral" value={stats.neutral} />
			<StatisticLine text="bad" value={stats.bad} />
			<StatisticLine text="all" value={stats.all} />
			<StatisticLine text="average" value={stats.average} />
			<StatisticLine text="positive" value={stats.positive} />
		</>
	);
};

const Button = ({ onClick, children }) => {
	return <button onClick={onClick}>{children}</button>;
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
				<Button onClick={handleClick}>good</Button>
				<Button onClick={handleClick}>neutral</Button>
				<Button onClick={handleClick}>bad</Button>
			</div>
			{total ? (
				<div>
					<Statistics
						stats={{ good, bad, neutral, total, average, positive }}
					/>
				</div>
			) : (
				<div>
					<p>No feedback given</p>
				</div>
			)}
		</div>
	);
}

export default App;
