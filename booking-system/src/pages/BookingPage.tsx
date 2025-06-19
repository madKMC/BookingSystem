import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import Booking from '../components/Booking.tsx';

const BookingPage = () => {
	return (
		<>
			<div className='min-h-screen flex flex-col'>
				<Header></Header>
				<main className='flex-1'>
					<Booking />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default BookingPage;

//Contact:
// 1. What is the purpose of this page? Make bookings, view bookings, and cancel bookings.