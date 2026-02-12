import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";
import Federicoded from './pages/portfolio/federicoded/federicoded';

function App() {
	return (
		<>
			<title>FEDERICODED</title>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/portfolio/federicoded" element={<Federicoded />} />
			</Routes>
		</>
	)
}

export default App
