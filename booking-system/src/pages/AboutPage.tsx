import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import Modal from '../components/Modal.tsx';

const AboutPage = () => {
	return (
		<>
			<div className='min-h-screen flex flex-col'>
				<Header></Header>
				<main className='flex-1 align-center'>
					<Modal></Modal>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default AboutPage;

//About:
// 1. What is the purpose of this page? Displaying information about the company, its mission, and its team members.
// 2. Display Awards and recognitions.
// 3. Display the team members with their photos and short bios.
// 4. Why choose us?