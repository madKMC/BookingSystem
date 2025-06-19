import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomTimePicker from './CustomTimePicker';

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
	const [selectedTime, setSelectedTime] = useState('');

	const availableTimes = [
		'09:00',
		'10:00',
		'11:00',
		'13:00',
		'14:00',
		'15:00',
		'16:00',
	];

	return (
		<div className='max-w-md mx-auto p-4'>
			<h1 className='text-2xl mb-2 w-xs'>Book a Session</h1>
			<input
				name='name'
				placeholder='Name'
				onChange={handleChange}
				className='mt-2 p-2 w-xs border rounded'
			/>
			<br />
			<input
				name='email'
				placeholder='Email'
				onChange={handleChange}
				className='mt-2 p-2 w-xs border rounded'
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
				className='w-xs mt-2 p-2 border rounded bg-white text-gray-800'
				calendarClassName='bg-white border rounded-lg shadow-lg z-50'
				dayClassName={(date) =>
					'text-sm  rounded-full hover:bg-blue-100 ' +
					(date.getDay() === 0 || date.getDay() === 6
						? 'text-gray-400'
						: 'text-black')
				}
                
				placeholderText='Select a date'
			/>
			<CustomTimePicker
				selectedTime={selectedTime}
				setSelectedTime={setSelectedTime}
				availableTimes={availableTimes}
			/>
			<div>
				<button
					onClick={handleSubmit}
					className='bg-blue-500 text-white mt-2 px-4 py-2 rounded'
				>
					Book
				</button>
			</div>
			{message && <p className='mt-4'>{message}</p>}
		</div>
	);
};

export default Booking;
