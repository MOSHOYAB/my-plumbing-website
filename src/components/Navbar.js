import React from "react";
import { NavLink } from "react-router-dom";
import { WrenchScrewdriverIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import facebook from '../logo/facebook.jpg'
import twitter from '../logo/twitter.png'
import google from '../logo/google.jpg'
import linkedin from '../logo/linkedin.png'
import logo from '../logo/Group 9964.png'


const Navbar = () => {
  return (
    <header>
      <div className="flex">
        <div className=" bg-blue-500 w-full p-3 flex justify-end items-center md:pr-20">
          <div className='flex space-x-3 text-center'>
            <div className="flex pr-[400px]">
            <div className="hidden md:flex space-x-3 items-center">
            <span className="border border-blue-400 p-2">
                <PhoneIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-baseline ">
                <p className="text-white">(455)362-3603</p>
                <a href="tel:+2348147603570" className="text-sm grey"></a>
            </div>
          </div>
            <div className="flex space-x-3 items-center ">
            <span className="border border-blue-400 p-2">
                <EnvelopeIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-baseline float-left">
              <p className="text-white">Hello@gdoor.com</p>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="text-sm grey"></a>
            </div>
          </div>
          
            </div>
          
          <a href="#"
            target="_blank" rel="noreferrer" >
          <span className="text-white mt-2 text-center">Follow Us</span>
          </a>
          <a href="#"
            target="_blank" rel="noreferrer" >
            <img className="circle" src={facebook} alt="facebook logo" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img className="circle" src={twitter} alt="twitter logo" />
          </a>
          <a href=" #" target="_blank" rel="noreferrer">
            <img className="circle" src={google} alt="google logo" />
          </a>
          <a href="https://www.linkedin.com/in/mo-shoyab-185854206/" target="_blank" rel="noreferrer">
            <img className="circle" src={linkedin} alt="linkedin logo" />
          </a>
        </div>
        </div>
      </div>

      <nav className="flex justify-center md:justify-between md:container items-center
        bg-white w-full px-3  md:pr-0
       text-white mx-auto text-[12px] md:text-[15px] font-bold">
        <img src={logo}></img>
        <ul className="flex space-x-4 md:space-x-10  md:mx-3 py-6">
        <NavLink className="link font-bold text-black" to="/">HOME</NavLink>
        <li><NavLink className="link font-bold text-black" to="/about">ABOUT US</NavLink></li>
        <li data-to-scrollspy-id="services"><NavLink className="link font-bold text-black"  to="/result">SERVICES</NavLink></li>
        <li><NavLink className="link font-bold text-black" to="/projects">PROJECTS</NavLink></li>  
        <li><NavLink className="link font-bold text-black " to="/Features">Features</NavLink></li>  
        <li><NavLink className="link font-bold text-black " to="/Prices">Prices</NavLink></li>  
        <li><NavLink className="link font-bold text-black" to="/FAQ">FAQ</NavLink></li>  
        </ul>
        <li className="hidden md:block hover:opacity-90 
        active:bg-blue-700 bg-yellow-600 px-5 py-6 font-bold text-black">Appointment</li>
      </nav>
    </header>
  )
}

export default Navbar
