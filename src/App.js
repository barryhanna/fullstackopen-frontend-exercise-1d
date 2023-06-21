import { useState } from 'react';

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

	return (
		<div>
			<div>
				<p>give feedback</p>
				<button onClick={handleClick}>good</button>
				<button onClick={handleClick}>neutral</button>
				<button onClick={handleClick}>bad</button>
			</div>
			<div>
				<p>statistics</p>
				<p>good {good}</p>
				<p>neutral {neutral}</p>
				<p>bad {bad}</p>
			</div>
		</div>
	);
}

export default App;
