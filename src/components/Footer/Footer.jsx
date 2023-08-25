import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoPinterestAlt, BiLogoYoutube } from "react-icons/bi";



const Footer = () => {
  return (
    <>
      <footer>
        
           <div 
            style={{
                    background: "url('/assets/Rectangle 48.png') ",
                    backgroundSize: "cover"                    
                  }}>
        <div className='flex justify-around items-center pl-[112px] pr-[65px] pb-[20px]  text-white pt-10'>
            <div>
              <img src="/assets/logo.png" alt="" />
              <p className='text-[20px] '>All Rights Reserved</p>
            </div>
            <div className='flex '>
                <div className='mr-[59px] '>
                  <h3 className='text-[20px]'>{"Fresh Recipe"}</h3>
                  <ul className='text-[15px]'>
                    <li>Recipes</li>
                    <li>Winter Salad</li>
                    <li>Organic Chicken</li>
                    <li>Beef and Muton</li>
                    <li>Flavoured Milk</li>
                  </ul>
                </div>
                <div className='mr-[59px] '>
                <h3 className='text-[20px]'>{"In News"}</h3>
                <ul className='text-[15px]'>
                  <li>Our Blogs</li>
                  <li>Contents/Sweepsatkes</li>
                  <li>Video</li>
                  <li>New Releases</li>
                  <li>Newsletters</li>
                </ul>
                </div>
                <div className='mr-[59px] '>
                <h3 className='text-[20px]'>{"About Us"}</h3>
                <ul className='text-[15px]'>
                  <li>FAQ</li>
                  <li>Our Board</li>
                  <li>Our Staff</li>
                  <li>Contact Us</li>
                </ul>
                </div>
            </div>
            <div className='mr-65'>
              <p className='text-[40px] font-montez'>Join Our Newslettter</p>
              <div className='flex mb-[25px]'>
                <input type="text" placeholder='Email'className='border-[1px] p-[10px] w-[100%] rounded-l-lg'/>
                <AiOutlineMail className='w-[80px] h-[50px] ml-0 bg-slate-300 rounded-r-lg'/>
              </div>
              <div className='flex text-[30px] mr-12'>
                <BiLogoFacebook/>
                <BiLogoInstagram/>
                <BiLogoTwitter/>
                <BiLogoPinterestAlt/>
                <BiLogoYoutube/>
              </div>
            </div>
          </div>
        </div>
        
        
      </footer>
    </>
  )
}

function More (Heading, Text) {
  return <h3>{Heading}</h3>;
  <li>{Text}</li>
}
export default Footer