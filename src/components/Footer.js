import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  MapIcon, MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/solid'
import facebook from '../logo/facebook.jpg'
import twitter from '../logo/twitter.png'
import google from '../logo/google.jpg'
import linkedin from '../logo/linkedin.png'
import {  ValidationError } from '@formspree/react';


const Footer = () => {
  return (
    <section className='bg-blue-500 flex flex-col pt-4 pb-3 md:pb-0'>
      <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-around md:items-baseline items-center py-4'>
        <div className='flex flex-col space-y-1 items-baseline  text-white font-bold'>
          <h2 className='font-bold text-white'>Need help with order?</h2>
          <address className='flex items-baseline justify-center'>
            <div className='flex flex-col  space-y-1 grey'>
              <span className='text-sm flex items-center text-white pt-2 pb-2'>
              We have spent many months creating BONES<br></br> Wireframe Kit to help you create designs
                </span>
                <span className='text-sm flex items-center text-white p-2 '>
                  <MapPinIcon className='text-white h-4 w-4 mx-1' />
                  8494 Signal Hill Road Manassas,Va, 20110
                </span>
                <span className='text-sm flex items-center text-white p-2'>
                  <PhoneIcon className='text-white h-4 w-4 mx-1'/>
                123 456 789
              </span>
              <div className='text-sm flex items-center text-white p-2'>
                  <EnvelopeIcon className='text-white h-4 w-4 mx-1'/>
                  <a href="mailto:kasbassnigenterprises@gmail.com">Plumbing@Yahoo.Com</a>
              </div>
            </div>
          </address>
        </div>

      <form className='flex items-center flex-col md:space-y-2 text-white'>
        <p className=' pb-1 text-white'>Get notify when the new work posted</p>
        <div className='flex items-center flex-shrink w-full md:w-60 lg:w-80 h-10 rounded-md cursor-pointer bg-blue-500 hover:opacity-90 active:bg-blue-700'>
        <input type="email" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' placeholder='Email Address'/>
        </div>
        <div className="flex items-center flex-shrink w-full md:w-60 lg:w-80 h-10 rounded-md cursor-pointer bg-blue-500 hover:opacity-90 active:bg-blue-700">
							<input className="w-full rounded-md border border-gray-300 outline-none" type="text" placeholder="Phone Number " name='text'/>
						</div>
            <div className="flex items-center flex-shrink w-full md:w-60 lg:w-80 h-10 rounded-md cursor-pointer bg-blue-500 hover:opacity-90 active:bg-blue-700 ">
						<input className="w-full rounded-md border border-gray-300 outline-none" type="text" id="fullName" placeholder="Subject" name='fullName' />
					</div>
          <div className=" items-center  w-full  rounded-md  ">
							<textarea className="rounded-md border border-gray-300 outline-none "
								cols="31" rows="3" placeholder=" Your Message" name='address'>
						</textarea>
						</div>
            <button
						type='submit'
						className="p-3 text-white font-bold px-8 border rounded-md bg-yellow-600 hover:opacity-90 active:bg-deepBlue  border-paleBlue duration-100">
						Send
					</button>
      </form>
      </div>
      <div className='flex items-center justify-between space-y-1
      md:border-bottom-gray-200 p-3 connect px-6'>
        <h2 className='font-bold text-white text-[20px]'>Follow Us</h2>
        <div className='flex space-x-3'>
          <a href="https://www.facebook.com/profile.php?id=100063464694068&mibextid=ZbWKwL"
            target="_blank" rel="noreferrer" >
            <img className="circle" src={facebook} alt="facebook logo" />
          </a>
          <a href="https://mobile.twitter.com/GasaliAbass" target="_blank" rel="noreferrer">
            <img className="circle" src={twitter} alt="twitter logo" />
          </a>
          <a href=" https://www.instagram.com/invites/contact/?i=mi29glvkp6z6&utm_content=gwkaofn" target="_blank" rel="noreferrer">
            <img className="circle" src={google} alt="google logo" />
          </a>
          <a href="https://www.linkedin.com/in/abass-kasali-369911247" target="_blank" rel="noreferrer">
            <img className="circle" src={linkedin} alt="linkedin logo" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer
