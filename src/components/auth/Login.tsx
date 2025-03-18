import { useEffect, useState } from "react";
import "./login.scss";
// Using ES6 modules
import axios from "axios";

//Login Component

const Login = () => {
	//ser user data state
	const [userData, setUserData] = useState({ email: "", password: "" });

	//handing onchange function
	const handleChange = (e) => {
		const { name, value } = e.target;

		setUserData({
			...userData,
			[name]: value,
		});
	};

	//this function will submit the form
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("handle submit");
		axios
			.post("http://localhost:8080/api/v1/login", userData)
			.then((response) => console.log(response, "REsponse"));
	};

	return (
		<div className="login-container container">
			<div className="row">
				<div className="col"></div>
				<div className="col-lg-4">
					<h1>Please Loign</h1>
					<form>
						<div className="form-group user-name py-3">
							<input
								type="text"
								name="email"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Entr Username"
								onChange={handleChange}
								onBlur={handleChange}
							/>
						</div>
						<div className="form-group password py-3">
							<input
								type="password"
								name="password"
								className="form-control"
								id="formGroupExampleInput2"
								placeholder="Enter password"
								onChange={handleChange}
							/>
						</div>
						<div className="form-group py">
							<button className="btn btn-success" onClick={handleSubmit}>
								Login
							</button>
						</div>
					</form>
				</div>
				<div className="col"></div>
			</div>
		</div>
	);
};

export default Login;
