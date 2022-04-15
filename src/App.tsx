import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Reset />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
