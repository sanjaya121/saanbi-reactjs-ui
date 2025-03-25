import { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";

const DashBoard = () => {
	const dashboard = useAppSelector((state) => state.dashboard.value);

	console.log("Dashboard ", dashboard);

	useEffect(() => {
		const req = async () => {
			const response = await fetch("https://jsonfakery.com/products");
			const json = await response.json();
			return json;
		};
		console.log("JSON", req().then(products=>{
            
        }));
	});
	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
};
export default DashBoard;
