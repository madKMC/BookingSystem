import Header from '../components/Header.tsx';
import Contact from '../components/Contact.tsx';
import Footer from '../components/Footer.tsx';

const ContactPage = () => {
	return (
		<>
			<div className='min-h-screen flex flex-col'>
				<Header />
				<main className='flex justify-center px-4 py-8 sm:px-6 lg:px-8'>
					<Contact />
				</main>
				<div className='flex-grow' />
				<Footer />
			</div>
		</>
	);
};

export default ContactPage;
