import { useState, useMemo } from 'react';

const UseMemo = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);
	const doubleNumber = useMemo(() => slowFunction(number), [number]);

	const themes = {
		backgroundColor: dark ? '#333' : '#fff',
		color: dark ? '#fff' : '#333',
	};

	return (
		<div style={themes}>
			<div>
				<p>Use memo</p>

				<input
					type='number'
					value={number}
					onChange={(e) => setNumber(parseFloat(e.target.value))}
				/>

				<p>{doubleNumber}</p>

				<button onClick={() => setDark((prev) => !prev)}>change Theme</button>
			</div>
		</div>
	);
};

export default UseMemo;

const slowFunction = (num) => {
	console.log('calling slow function');
	for (let i = 0; i <= 1000000000; i++) {
		/* empty */
	}
	return num * 2;
};
