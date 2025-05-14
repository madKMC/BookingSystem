const RegisterPage = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<div className='w-full max-w-xs'>
				<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
					<div className='mb-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
							Name
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='name'
							type='text'
							placeholder='Enter your name'
							required
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='surname'>
							Surname
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='surname'
							type='text'
							placeholder='Enter your surname'
							required
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
							Email Address
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='email'
							type='email'
							placeholder='Enter your email'
							required
						/>
					</div>

					<div className='mb-6'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='cell'>
							Cell Number
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							id='cell'
							type='tel'
							placeholder='Enter your cell number'
							required
						/>
					</div>

					<div className='flex items-center justify-between'>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='submit'
						>
							Register
						</button>
						<button
							className='text-sm text-blue-500 hover:text-blue-800 font-bold'
							type='button'
						>
							Back to Login
						</button>
					</div>
				</form>
				<p className='text-center text-gray-500 text-xs'>
					&copy;2025 CairnsForge. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default RegisterPage;
