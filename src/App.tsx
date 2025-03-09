import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componenets/home/Home";
import Login from "./componenets/auth/Login";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app-home">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
