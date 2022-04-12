import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
	return (
		<div className="App">
			<Reset />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/comunity" element={<Community />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/sign-in" element={<SignIn />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
