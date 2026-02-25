import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";
import Federicoded from './pages/portfolio/federicoded/federicoded';

function App() {
	return (
		<>
			<title>FEDERICODED</title>
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
			<link rel="manifest" href="/site.webmanifest"></link>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/portfolio/federicoded" element={<Federicoded />} />
			</Routes>
		</>
	)
}

export default App
