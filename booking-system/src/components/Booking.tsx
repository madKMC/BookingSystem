import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
	const [form, setForm] = useState({ name: '', email: '', date: '', time: '' });
	const [message, setMessage] = useState('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		const res = await fetch('http://localhost:4000/api/bookings', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form),
		});

		const data = await res.json();
		setMessage(data.message || data.error);
	};

	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	return (
		<div className='max-w-md mx-auto p-4'>
			<h1 className='text-2xl mb-4 w-xs'>Book a Session</h1>
			<input
				name='name'
				placeholder='Name'
				onChange={handleChange}
				className='mb-2 p-2 w-xs border'
			/>
			<br />
			<input
				name='email'
				placeholder='Email'
				onChange={handleChange}
				className='mb-2 p-2 w-xs border'
			/>
			<DatePicker
				selected={selectedDate}
				onChange={(date: Date | null) => {
					setSelectedDate(date);
					if (date) {
						handleChange({
							target: {
								name: 'date',
								value: date.toISOString().split('T')[0], // e.g., "2025-06-19"
							},
						} as React.ChangeEvent<HTMLInputElement>);
					}
				}}
				minDate={new Date()}
				filterDate={(date: Date) => {
					const day = date.getDay();
					return day !== 0 && day !== 6; // Disable Sunday (0) and Saturday (6)
				}}
				dateFormat='yyyy-MM-dd'
				className='mb-2 p-2 w-xs border'
                placeholderText='Select a date'
			/>
			<select
				name='time'
				onChange={handleChange}
				className='mb-2 p-2 w-xs border'
			>
				<option value=''>Select a time</option>
				<option value='09:00'>09:00</option>
				<option value='10:00'>10:00</option>
				<option value='11:00'>11:00</option>
				{/* exclude 12:00 */}
				<option value='13:00'>13:00</option>
				<option value='14:00'>14:00</option>
				<option value='15:00'>15:00</option>
				<option value='16:00'>16:00</option>
			</select>
			<br />
			<button
				onClick={handleSubmit}
				className='bg-blue-500 text-white px-4 py-2 rounded'
			>
				Book
			</button>
			{message && <p className='mt-4'>{message}</p>}
		</div>
	);
};

export default Booking;
