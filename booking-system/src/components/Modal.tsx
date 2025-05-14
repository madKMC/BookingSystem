import React from 'react';

const Modal: React.FC = () => {
	return (
		<>
			{/* First Modal */}
			<div>
				<div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
						<div className='bg-white p-8 md:p-12 lg:px-16 lg:py-24'>
							<div className='mx-auto max-w-xl text-center'>
								<h2 className='text-2xl font-bold text-gray-700 md:text-3xl'>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit
								</h2>

								<p className='hidden text-gray-600/90 sm:mt-4 sm:block'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
									egestas tempus tellus etiam sed. Quam a scelerisque amet
									ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
									quisque ut interdum tincidunt duis.
								</p>
							</div>
						</div>

						<div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2'>
							<img
								src='/PsychologyImage1.jpg'
								className='h-40 w-full object-cover sm:h-56 md:h-full'
							></img>
							<img
								src='/PsychologyImage2.jpg'
								className='h-40 w-full object-cover sm:h-56 md:h-full'
							></img>
						</div>
					</div>
				</div>
			</div>

			{/* Second Modal */}

			<div className='overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center'>
				<div className='p-8 md:p-12 lg:px-16 lg:py-24'>
					<div className='mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
						<h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit
						</h2>

						<p className='hidden text-gray-500 md:mt-4 md:block'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
							egestas tempus tellus etiam sed. Quam a scelerisque amet
							ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
							quisque ut interdum tincidunt duis.
						</p>
					</div>
				</div>

				<img
					src='/PsychologyImage3.jpg'
					className='h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]'
				/>
			</div>
		</>
	);
};

export default Modal;
