import Header from '../components/Header.tsx';
import Contact from '../components/Contact.tsx';
import Footer from '../components/Footer.tsx';

const ContactPage = () => {
	return (
		<>
			<div className='min-h-screen flex flex-col'>
				<Header></Header>
				<main className='flex-1'>
					<Contact></Contact>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default ContactPage;
