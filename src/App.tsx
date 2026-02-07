import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";

function App() {
	return (
		<>
			<title>FEDERICODED</title>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
			</Routes>
		</>
	)
}

export default App
