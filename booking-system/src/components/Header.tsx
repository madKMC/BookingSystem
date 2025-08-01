import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ZDLogo from './ZDLogo';

const Header: React.FC = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

	return (
		<header className='bg-gradient-to-r from-blue-500 to-white'>
			<div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					<div className='flex-1 md:flex md:items-center md:gap-12'>
						<Link className='block text-white' to='/' onClick={() => setMobileMenuOpen(false)}>
							<ZDLogo />
						</Link>
					</div>
					{/* Navigation for screens larger than 768px */}
					<div className='md:flex md:items-center md:gap-12'>
						<nav aria-label='Global' className={`hidden lg:block`}>
							<ul className={`text-sm lg:flex lg:flex-row lg:gap-6`}>
								<li>
									<Link
										className='text-lg font-medium text-blue-800 hover:text-gray-600 hover:underline hover:animate-pulse'
										to='/'
										onClick={() => setMobileMenuOpen(false)}
									>
										{' '}
										Home{' '}
									</Link>
								</li>
								<li>
									<Link
										className='text-lg font-medium text-blue-800 hover:text-gray-600 hover:underline hover:animate-pulse'
										to='/About'
										onClick={() => setMobileMenuOpen(false)}
									>
										{' '}
										About Us{' '}
									</Link>
								</li>
								<li>
									<Link
										className='text-lg font-medium text-blue-800 hover:text-gray-600 hover:underline hover:animate-pulse'
										to='/Bookings'
										onClick={() => setMobileMenuOpen(false)}
									>
										{' '}
										Bookings{' '}
									</Link>
								</li>
								<li>
									<Link
										className='text-lg font-medium text-blue-800 hover:text-gray-600 hover:underline hover:animate-pulse'
										to='/Contact'
										onClick={() => setMobileMenuOpen(false)}
									>
										{' '}
										Contact{' '}
									</Link>
								</li>
							</ul>
						</nav>

						<div className='flex items-center gap-4'>
							{/* Mobile Hamburger Button */}
							<button
								onClick={toggleMobileMenu}
								className='lg:hidden sm:pr-0.5'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6 text-blue-700'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h16'
									></path>
								</svg>
							</button>
							{/* Mobile Dropdown */}
							{isMobileMenuOpen && (
								<div className='lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50'>
									<ul className='flex flex-col space-y-4 p-4'>
										<li>
											<Link
												className='text-lg font-bold text-blue-800 hover:text-gray-600 hover:underline hover:animate-pulse'
												to='/'
												onClick={() => setMobileMenuOpen(false)}
											>
												{' '}
												Home{' '}
											</Link>
										</li>
										<li>
											<Link
												className='text-lg font-bold text-blue-800 hover:text-gray-600 hover:underline hover:animate-pulse'
												to='/About'
												onClick={() => setMobileMenuOpen(false)}
											>
												{' '}
												About Us{' '}
											</Link>
										</li>
										<li>
											<Link
												className='text-lg text-blue-800 hover:text-gray-600 hover:underline hover:animate-pulse'
												to='/Bookings'
												onClick={() => setMobileMenuOpen(false)}
											>
												{' '}
												Bookings{' '}
											</Link>
										</li>
										<li>
											<Link
												className='text-lg text-blue-800 hover:text-gray-600 hover:underline hover:animate-pulse'
												to='/Contact'
												onClick={() => setMobileMenuOpen(false)}
											>
												{' '}
												Contact{' '}
											</Link>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
