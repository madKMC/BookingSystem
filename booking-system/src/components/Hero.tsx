import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
	return (
		<section className='bg-white lg:grid lg:h-screen lg:place-content-center'>
			<div className='mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32'>
				<div className='max-w-prose text-left'>
					<h1 className='text-4xl font-bold text-gray-900 sm:text-5xl'>
						Your Path to Mental Wellness Starts Here!
						<strong className='text-indigo-600'> Improve </strong>
						yourself
					</h1>

					<p className='mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed'>
						Connect with Lee's Mom, a licensed psychologist who cares. Whether
						youre managing stress, seeking personal growth, or navigating life
						transitions, Lee's Mom is here to help.
					</p>

					<div className='mt-4 flex gap-4 sm:mt-6'>
						<Link
							className='inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700'
							to='/Bookings'
						>
							Get Started
						</Link>

						<Link
							className='inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900'
							to='/About'
						>
							Learn More
						</Link>
					</div>
				</div>
				<img src='/BookingSystem/79082.jpg' className='mr-2 p-2'></img>
			</div>
		</section>
	);
};

export default Hero;
