import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import Modal from '../components/Modal.tsx';

const AboutPage = () => {
	return (
		<>
			<Header></Header>
			<div className="align-center">
			<Modal></Modal>
			</div>			
			<Footer></Footer>
		</>
	);
};

export default AboutPage;

//About:
// 1. What is the purpose of this page? Displaying information about the company, its mission, and its team members.
// 2. Display Awards and recognitions.
// 3. Display the team members with their photos and short bios.
// 4. Why choose us?