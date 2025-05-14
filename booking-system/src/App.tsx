import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/About' element={<AboutPage />} />
				<Route path='/Bookings' element={<BookingPage />} />
				<Route path='/Contact' element={<ContactPage />} />
				<Route path='/Login' element={<LoginPage />} />
				<Route path='/Register' element={<RegisterPage />} />
			</Routes>
		</Router>
	);
}

export default App;
