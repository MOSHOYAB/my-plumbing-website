import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { service } from '../functions/pictures'
import { feedback } from '../functions/customerFeedback'
import Card from '../components/Card';
import Project from '../components/Project';
import Choose from '../components/Choose';
import Himage from '../logo/Image Change here.png';
import quality from '../logo/Quality.png';
import quality_service from '../logo/quality-service.png';
import Book from "../components/Book";
import { NavLink } from "react-router-dom";
import group from "../logo/Group 9896.png"
import Professionals from "../logo/Group 9884.svg"
import Satisfaction from "../logo/Group 9885.svg"
import Benefits from "../logo/Group 9886.svg"
import Price from "../logo/Group 9887.svg"
import piping_img from "../logo/Image.png"
import plan from '../logo/Group 9777.png'
import { FaStar } from "react-icons/fa";
import image_testi from '../logo/image_testi.png'
import Coupon from "../components/coupon";

const Home = () => {
  const [Image, setImage] = useState('')

  const changer = () => {
    const bg = image[Math.floor(Math.random() * image.length)];
    setImage(bg)
  }

  useEffect(() => {
    setInterval(changer, 5000);
  },[])
 
  return (
    <>
      <Navbar />
        <div className="relative">
        <div className="relative">
          <div className="bg-white absolute z-50 items-center m-20 w-[509px] h-[312px] ml-[300px] opacity-75 ">
          <div className="  flex flex-col items-center text-black text-center">
            <p className="text-black">Plumbing Company</p>
            <h1 className=" text-[32px] font-bold my-4 animate__animated animate__zoomIn">DELIVERS ELITE PLUMBING SERVICES</h1>
            <p className=" mb-3">You deserve to have a handy team of plumbers who can install or repair any plumbing system you need</p>
            <div className="flex gap-5">
              <NavLink to="/message">
                <div className="flex border-2 ">
                  <img className="w-[30px] h-[35px] items-center my-1 ml-3" src={quality}></img>
                <button className=" font-bold px-2">Certified <br></br> Professionals</button>

                </div>
              </NavLink>
              <NavLink to="/message">
                <div className="flex border-2 ">
                  <img className="w-[30px] h-[35px] items-center my-1 ml-3" src={quality_service}></img>
                <button className=" font-bold px-2">Quality <br></br> Service</button>

                </div>
              </NavLink>
             
            </div>
          </div>
          </div>
        
          <img
            className="h-[620px] w-full "
            src={Himage}
            alt="four white ceramic urinal sink"
          />
        </div>
      </div>
      <div className="flex items-center ml-[100px] m-5 py-11">
       <div className="w-[530px] h-[175px]">
        <img src={group}></img>
       </div>
       <div className="w-[530px] h-[175px] m-5" >
        <h1 className="font-bold ">About Us <br></br>Plumbing is what we do</h1>
       <p className="text-20px">At Plumbing, we are more than just plumbers we are your dedicated partners in maintaining the heart of your home. With a legacy of excellence spanning over 10 years, we have been serving with unparalleled plumbing solutions that blend expertise, innovation, and reliability. A plumbing company is a business that specializes in providing various plumbing services to residential, commercial, and industrial clients. Plumbing services encompass a wide range of tasks related to installing, maintaining, repairing, and replacing plumbing systems, including water supply, drainage, sewage, gas lines, and more. Here are some key aspects of a plumbing company:</p>
       <div className="bg-yellow-500 w-[100px] h-[25px] my-1">
        <button className="ml-1">Appointment</button>
       </div>
       </div>

      </div>

      <div className="m-0 bg-gray-100 mt-[150px] w-full p-0 items-center ">
        <div className="text-center p-3 m-3">
          <h1 className="font-bold text-40px">FEATURES</h1>
          <h1 className="font-bold text-[30px] ">
            Why Choose Us
          </h1>
          <p className="mt-[20px]">For all your plumbing needs, from minor faucet fixes to managing extensive pipe issues, Plumbing Company is your go-to choice.<br></br> Elevate your plumbing experience - reach out today for reliable services that enhance your home’s comfort and functionality</p>
          <div className="flex item-center m-5 w-full ">
          <div className="item-center pl-[300px] p-10">
            <img src={Professionals}></img>
            <p className="font-bold text-40px">Experienced<br></br> Professionals</p>
          </div>
          <div className="p-10">
            <img src={Satisfaction}></img>
            <p className="font-bold text-40px">Customer<br></br> Satisfaction</p>
          </div>
          <div className="p-10">
            <img src={Benefits}></img>
            <p className="font-bold text-40px">Customer <br></br>Benefits</p>
          </div>
          <div className="p-10 ">
            <img src={Price}></img>
            <p className="font-bold text-40px">Affordable<br></br> Price</p>
          </div>
          </div>
        </div>
      </div>
<div className="relative w-full p-0 m-0 bg-blue-500 h-[400px] ">
<div className="text-center font-bold text-white pt-20 mb-[-100px]">
          <p>OUR EXPERTISE</p>
          <h1 className="text-[40px] ">OUR Dedicated Services</h1>
        </div>
<div className="flex h-[300px]  ">
        <div className="bg-gray-100 w-[200px] h-[350px] absolute m-40 ">
          <ul className="p-3">
            <li className="mb-3">Piping & Repiping</li>
            <li className="mb-3">Drain Cleaning & Repair</li>
            <li className="mb-3">Boiler Repair & Installation</li>
            <li className="mb-3">24 Hour Plumbing</li>
            <li className="mb-3">Leak Detection</li>
            <li className="mb-3">Clogged Drain Clearing</li>
            <li className="mb-3">Plumbing Fixtures</li>
            <li className="mb-3">Commercial Plumbing</li>
          </ul>
        </div>
        <div className="w-[900px] h-[200px] items-center m-40 pl-[250px]">
          
            <div className="bg-gray-100 p-4 h-[150px] ">
              <h1 className="font-bold mb-3">Piping & Repiping</h1>
              <p>Piping and repiping are crucial aspects of plumbing, ensuring efficient water supply and drainage in residential and commercial spaces. Piping involves the installation of plumbing systems, while repiping addresses issues such as leaks and deterioration. Using quality materials and adhering to safety standards, these services contribute to the longevity and reliability of plumbing infrastructure.</p>
            
          </div>
          <img className="h-[200px]" width={"900px"}  src={piping_img}></img>
        </div>
      </div>
    
      </div>
      <div className="bg-white w-full h-[200px]"></div>

<div className="bg-gray-100">
  <div className="font-bold text-center">
    <p>OUR PRICING</p>
    <h1>Our Pricing Table</h1>
  </div>
  <div className="flex items-center pl-[250px]">
    <div className="border-2 p-3">
      <div className="flex m-2 ">
        <div>
          <p className="text-blue-500">Plumbing Plan</p>
          <h1 className="font-bold text-[30px]">$100</h1>
        </div>
        <div className="pl-10">
          <img className="w-[40px] h-[50px]"  src={plan}></img>
        </div>

      </div>
      <div>
        <ul>
          <li>Get 10% OFF all parts and repairs</li>
          <li>Test Water Pressure</li>
          <li>Identify Shut-Off Valves</li>
          <li>Priority service</li>
        </ul>
      </div>
    </div>
    <div className="border-2 p-3 h-[270px] m-2 bg-blue-500 text-gray-50">
      <div className="flex m-2 ">
        <div>
          <p className="">Plumbing Plan</p>
          <h1 className="font-bold text-[30px]">$100</h1>
        </div>
        <div className="pl-10">
          <img className="w-[40px] h-[50px]"  src={plan}></img>
        </div>

      </div>
      <div>
        <ul>
          <li>Get 10% OFF all parts and repairs</li>
          <li>Test Water Pressure</li>
          <li>Identify Shut-Off Valves</li>
          <li>Priority service</li>
        </ul>
      </div>
    </div>
  
    <div className="border-2 p-3">
      <div className="flex m-2 ">
        <div>
          <p className="text-blue-500">Plumbing Plan</p>
          <h1 className="font-bold text-[30px]">$100</h1>
        </div>
        <div className="pl-10">
          <img className="w-[40px] h-[50px]"  src={plan}></img>
        </div>

      </div>
      <div>
        <ul>
          <li>Get 10% OFF all parts and repairs</li>
          <li>Test Water Pressure</li>
          <li>Identify Shut-Off Valves</li>
          <li>Priority service</li>
        </ul>
      </div>
    </div>
  </div>
</div>

      <div>
        <Book />
      </div>
      {/* <div>
        <Choose />
      </div> */}
      <div className="py-5 bg-white shadow rounded-md  md:mx-5 px-3 md:px-0">
        <div className='text-center flex flex-col space-y-2 my-6'>
          <h2 className="text-zinc-600 font-bold text-[30px]">TESTIMONIALS</h2>
          <p className="font-bold text-[40px] md:text-4xl text-blue-500">what our clients say</p>
          <div className="flex items-center pl-[200px] pt-8">
          <div>
              <img src={image_testi}></img>
            </div>
            <div>
            <p className=" max-w-sm md:max-w-lg mx-auto font-tin text-sm text-zinc-600 py-2">I recently had the pleasure of working with Plumbing for a plumbing issue in my home, and I am thoroughly impressed with their service. From start to finish, the experience was seamless and professional.
          </p>
          <div className="flex items-center pl-4">
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
        </div>
        <div className="pr-[360px] pt-2 font-bold">
          <span>@Jenny Brooks</span>
          </div>
      
            </div>
           
          </div>
          
        </div>
{/*         
        <div className="grid md:grid-cols-3 lg:grid-cols:3 xl:grid-cols-3 gap-x-5
            my-8 gap-y-5 justify-center bg-white p-10 md:mx-0 rounded-md">
          {feedback.map((feed, index) => (
            <Testimonial
            key={index}
            image={feed.image}
            alt={feed.alt}
            message={feed.message}
            name={feed.name}
            prof={feed.prof}
          />
          ))}
        </div> */}
      </div>

      <div className="flex bg-yellow-500 h-[120px] items-center text-white pl-[300px] ">
        <div className="p-10 font-bold text-[30px]">Give Us Your Valuable Feedback</div>
        <div className="bg-blue-500 rounded-lg p-2 ">
          <button>Send A Quote</button>
        </div>
      </div>
      <div>
        <Coupon/>
      </div>
    <Footer />
    </>
  );
};

export default Home;
