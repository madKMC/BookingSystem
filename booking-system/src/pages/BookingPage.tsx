import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
// import Booking from '../components/Booking.tsx';

const BookingPage = () => {
	return (
		<>
			<div className='min-h-screen flex flex-col'>
				<Header></Header>
				<main className='flex-1'>
					{/* <Booking /> */}
					{/* <!-- Google Calendar Appointment Scheduling begin --> */}
					<iframe
						src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ3XqpKQ6MXC8s2uj_BN2CBRDAdzmPgw59TyH9yUxrVwVKbvvXpZnZ_HllVhQGPA2NG592UkgwqJ?gv=true'
						className={'w-full h-screen border-0'}
					></iframe>
					{/* <!-- end Google Calendar Appointment Scheduling --> */}
				</main>
				<Footer />
			</div>
		</>
	);
};

export default BookingPage;

//Contact:
// 1. What is the purpose of this page? Make bookings, view bookings, and cancel bookings.
