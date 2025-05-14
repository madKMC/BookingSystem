const RegisterPage = () => {
	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<div className='w-full max-w-xs'>
				<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
					<div className="flex justify-end">
						<a className="text-gray-400 rounded p-1" href="/">x</a>
					</div>
					<div className='mb-6'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='contactNumber'>
							Contact Number
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							id='contactNumber'
							type='tel'
							placeholder='Contact number'
							required
						/>
					</div>

					<div className='mb-6'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='pw'>
							Password
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							id='pw'
							type='password'
							placeholder='Password'
							required
						/>
					</div>

					<div className='mb-6'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='pwConfirm'>
							Confirm Password
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							id='pwConfirm'
							type='password'
							placeholder='Confirm password'
							required
						/>
					</div>

					<div className='flex items-center justify-between'>
						<a
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='submit'
						>
							Register
						</a>
						<a
							className='text-sm text-blue-500 hover:text-blue-800 font-bold'
							type='button'
							href='/Login'
						>
							Back to Login
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

export default RegisterPage;
