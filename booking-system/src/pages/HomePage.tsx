import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Footer from '../components/Footer.tsx';

const HomePage = () => {
	return (
		<>
			<div className='min-h-screen flex flex-col'>
				<Header></Header>
				<main className='flex-1'>
					<Hero></Hero>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default HomePage;
