import React from 'react'
import { IoLogoJavascript } from "react-icons/io5"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaReact,FaHtml5  } from "react-icons/fa6"

export default function Hero(){
    return(
        <section className='grid grid-cols-1 sm:grid-cols-2 w-full place-items-center mt-10 rounded-sm p-8 gap-4'>
            <div className="p-6 rounded-lg bg-white mx-auto">
                {/* hero */}
                <h1 className="text-4xl md:text-5xl font-bold">
                    Hi, I'm <span className="text-blue-500">Moses</span>
                </h1>
                <h2 className="text-2xl md:text-3xl  mt-2">
                    A Passionate <span className="text-blue-500">Web Developer</span>
                </h2>
                
                <p className="text-gray-700 mt-4 text-[10px] sm:text-[11px]">
                    I can build responsive websites, create dynamic user interfaces, and develop modern web applications using React, JavaScript, and Tailwind CSS.
                </p>
                
                <button className="text-white bg-blue-500 rounded-sm p-2 text-sm mt-4 hover:bg-blue-600 transition duration-300 cursor-pointer">
                    Contact Me
                </button>
            </div>

            <div className=' rounded-sm p-6 '>
                <h1 className='text-center my-6 font-bold text-2xl'>Skill</h1>
                <div className='grid grid-cols-[repeat(2,minmax(50px,80px))] gap-4 place-content-center mt-8'>
                    <div><FaHtml5 size={50} className='text-orange-500 bounceTwo delay-200' /></div>
                    <div><IoLogoJavascript size={50} className='text-[#F7DF1E] animate-custom-bounce delay-500' /></div>
                    <div><FaReact size={50} className='text-[#61DAFB] animates' /></div>
                    <div><RiTailwindCssFill size={50} className='text-sky-400 animate-pulse' /></div>
                </div>
            </div>
        </section>
    )
}