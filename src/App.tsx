import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import DashBoard from './components/features/dashboard/Dashboard';
import UseMemo from './components/features/use-memo/UseMemo';

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div className='app-home'>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				></Route>
				<Route
					path='/use-memo'
					element={<UseMemo />}
				></Route>
				<Route
					path='/login'
					element={<Login />}
				></Route>
				<Route
					path='/dashboard'
					element={<DashBoard />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
