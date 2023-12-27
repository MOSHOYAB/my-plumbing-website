import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router';
import image_form from '../logo/Image_form.png'

const Book = () => {
	const [state, handleSubmit] = useForm('mlekdkoe');
	const navigate = useNavigate();

	if (state.succeeded) {
		navigate('/success');

		setTimeout(() => {
			navigate('/', { replace: true });
		},5000)
	}
	
	return (
		<>
		<div className='bg-blue-500 relative'>
			<div className="shadow-lg rounded-md my-10 bg-white flex flex-col md:flex-row justify-center gap-10 md:mx-5 md:pl-10 pl-4">
			<div className="w-full md:w-2/3 flex flex-col gap-5 my-5">
				<div className="text-center md:text-left">
					<h2 className="font-bold text-[25px] text-blue-500">Make An Appointment</h2>
					<p className="font-bold text-[20px]">Request a Quote</p>
				</div>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 "
					method="POST"
					action='https://formspree.io/f/mlekdkoe'
					name="hire-me">
					<div className="flex flex-col gap-1">
						<label htmlFor="fullName">Full Name</label>
						<input className="w-full rounded-md border border-gray-300 outline-none" type="text" id="fullName" placeholder="Enter Your Name" name='fullName' />
						<ValidationError field="text" prefix="Text" errors={state.errors} />
					</div>
					<div className="flex flex-col md:flex-row gap-2 w-full">
						<div className="flex flex-col gap-1 w-full md:w-1/2">
						<label htmlFor="text">Email</label>
							<input className="w-full rounded-md border border-gray-300 outline-none" type="text" placeholder="Email " name='text'/>
							<ValidationError field="email" prefix="Email" errors={state.errors} />
						</div>
						<div className="flex flex-col gap-1 w-full md:w-1/2">
						<label htmlFor="text">Phone Number</label>
							<input className="w-full rounded-md border border-gray-300 outline-none" type="text" placeholder="Phone Number " name='text'/>
							<ValidationError field="email" prefix="Email" errors={state.errors} />
						</div>
						
				</div>
					<div className="flex flex-col">
						<label htmlFor="date">Address</label>
							<textarea className="rounded-md border border-gray-300 outline-none"
								cols="2" rows="3" placeholder=" Address" name='address'>
						</textarea>
						</div>
						
						<div className="flex flex-col md:flex-row gap-2 w-full">
						<div className="flex flex-col gap-1 w-full md:w-1/2">
						<label htmlFor="date">Date</label>
							<input className="w-full rounded-md border border-gray-300 outline-none" type="date" name='date'/>
							<ValidationError field="date" prefix="Date" errors={state.errors} />
					</div>
						<div className="flex flex-col gap-1 w-full md:w-1/2">
						<label htmlFor="time">Time Of Visit</label>
							<input className="w-full rounded-md border border-gray-300 outline-none" type="time" placeholder="Time " name='time'/>
							<ValidationError field="time" prefix="time" errors={state.errors} />
						</div>
						
				</div>
						
					<button
						type='submit'
						className="p-3 text-white font-bold px-8 border rounded-md bg-yellow-600 hover:opacity-90 active:bg-deepBlue  border-paleBlue duration-100">
						Submit Request
					</button>
			  </form>
			</div>
			<div className="hidden md:flex">
				<img src={image_form} alt="" />
			</div>
			</div>
		</div>
		</>
	)
}

export default Book;