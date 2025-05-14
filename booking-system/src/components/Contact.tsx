import React from 'react';

const Contact: React.FC = () => {
	return (
		<div className='flex justify-center px-4 py-4 sm:px-6 lg:px-8'>
			<article className='rounded-xl border min-w-[33%] border-gray-300 bg-gray-50 p-4'>
				<div className='flex items-center gap-4'>
					<img
						alt=''
						src='/PsychologyProfilePic.jpg'
						className='size-16 rounded-full object-cover'
					/>

					<div>
						<h3 className='text-lg font-medium text-black'>Lees Mom</h3>

						<div className='flow-root'>
							<ul className='-m-1 flex flex-wrap'>
								<li className='p-1 leading-none'>
									<a href='#' className='text-xs font-medium text-gray-700'>
										{' '}
										Twitter{' '}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<ul className='mt-4 space-y-2'>
					<li>
						<a
							href='#'
							className='block h-full rounded-lg border border-gray-300 p-4 hover:border-pink-600'
						>
							<strong className='font-medium text-black'>Whatsapp</strong>

							<p className='mt-1 text-xs font-medium text-gray-700'>
								+27 82 123 4567
							</p>
						</a>
					</li>

					<li>
						<a
							href='#'
							className='block h-full rounded-lg border border-gray-300 p-4 hover:border-pink-600'
						>
							<strong className='font-medium text-black'>Email</strong>

							<p className='mt-1 text-xs font-medium text-gray-700'>
								leesmom@gmail.com
							</p>
						</a>
					</li>
				</ul>
			</article>
		</div>
	);
};

export default Contact;
