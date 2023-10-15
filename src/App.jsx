import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar';
import Hero from './assets/layouts/Hero/Hero';
import Card from './components/Card/Card';
import Features from './assets/layouts/Features/Features';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Sell from './pages/Sell/Sell'
import Buy from './pages/Buy/Buy';
import Footer from './components/Footer/Footer';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup'


function App() {
	const [token, setToken] = useState(null);
	const [refreshToken, setRefreshToken] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	return (
		<>
			<div id="preview" className="preview">
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/sell" element={<Sell />} />
						<Route path='/buy' element={<Buy />} />
						<Route path='/login' element={<Login 
							token={token} 
							setToken={setToken} 
							isAuthenticated={isAuthenticated} 
							setIsAuthenticated={setIsAuthenticated} />} />
						<Route path='/signup' element={<Signup 
							token={token} 
							setToken={setToken} 
							isAuthenticated={isAuthenticated} 
							setIsAuthenticated={setIsAuthenticated} />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</>
	)
}

export default App;
