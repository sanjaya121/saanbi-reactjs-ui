import { useEffect, useState } from 'react';

const List = ({ getItems }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItems());
		console.log('LIst component', items);
	}, [getItems]);

	return (
		<div>
			{items.map((item) => (
				<div key={item}>{item}</div>
			))}
		</div>
	);
};

export default List;
