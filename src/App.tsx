import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";

function App() {
	return (
		<div className="App">
			<Reset />
			<BrowserRouter>
				<Routes></Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
