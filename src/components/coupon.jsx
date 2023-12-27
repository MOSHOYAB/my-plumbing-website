import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router';
import image_coupon from '../logo/AdobeStock_598455901.png'
const Coupon = () => {
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
		<div className=' relative'>
			<div className="shadow-lg rounded-md my-3  bg-white flex flex-col md:flex-row justify-center gap-10 md:mx-5 md:pl-10 pl-4">
			<div className="w-full md:w-2/3 flex flex-col gap-5 my-5">
				<div className="text-center md:text-left">
					<h2 className="font-bold text-[25px]">Subscribe To Our Newsletter & Receive A Coupon</h2>
					<p className="font-bold text-[20px]">Get A Discount Of 10% Off The First 50 Users Today</p>
				</div>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 "
					method="POST"
					action='https://formspree.io/f/mlekdkoe'
					name="hire-me">
					
					<div className="flex flex-col md:flex-row gap-2 w-full">
						<div className="flex flex-col gap-1 w-full md:w-1/2">
							<input className="w-full rounded-md border border-gray-300 outline-none h-12" type="text" placeholder="Email " name='text'/>
							<ValidationError field="email" prefix="Email" errors={state.errors} />
						</div>
						<div className="flex flex-col gap-1 w-full md:w-1/4">
						<button
						type='submit'
						className="p-3 text-white font-bold px-8 border rounded-md bg-yellow-600 hover:opacity-90 active:bg-deepBlue  border-paleBlue duration-100">
						Get it Now
					   </button>
						</div>
						
				</div>
			  </form>
			</div>
			<div className="hidden md:flex w-[700px] h-[300px]">
				<img src={image_coupon} alt="" />
			</div>
			</div>
		</div>
		</>
	)
}

export default Coupon;