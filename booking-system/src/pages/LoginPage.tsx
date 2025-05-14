const LoginPage = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg gray-100'>
			<div className='w-full max-w-xs'>
				<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
					<div className="flex justify-end">
						<a className="text-gray-400 rounded p-1" href="/">x</a>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='contactNumber'
						>
							Contact Number
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='contactNumber'
							type='text'
							placeholder='Contact Number'
							required
						/>
					</div>
					<div className='mb-6'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='password'
						>
							Password
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							id='password'
							type='password'
							placeholder='Password'
							required
						/>
						{/* <p className='text-red-500 text-xs italic'>
							Please choose a password.
						</p> */}
					</div>
					<div className='flex items-center justify-between'>
						<a
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='button'
						>
							Sign In
						</a>
						<a
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='button'
							href='/Register'
						>
							Register
						</a>
					</div>
					<div className='w-full text-right'>
						<a
							className=' font-bold text-sm text-blue-500 hover:text-blue-800'
							href='#'
						>
							Forgot Password?
						</a>
					</div>
				</form>
				<p className='text-center text-gray-500 text-xs'>
					&copy;2025 CairnsForge. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
