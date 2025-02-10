import React from 'react'
import { motion } from 'framer-motion'

export default function NavBar(){
    const variants ={
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
    }
    return(
        <motion.header 
            className='fixed z-50 w-full top-0 shadow-md bg-white'
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 2, 
                type: "tween",
                repeatType:'reverse',
                ease: "easeInOut"
            }}
        >
            <nav className='py-4'>
                <ul className='flex text-[#333333] gap-3 justify-center text-sm'>
                    <li><a className='hover:text-blue-500 hover:border-b-2 hover:border-blue-600 transition hover:duration-300' href="#home">Home</a></li>
                    <li><a className='hover:text-blue-500 hover:border-b-2 hover:border-blue-600 transition hover:duration-300' href="#projects">Project</a></li>
                    <li><a className='hover:text-blue-500 hover:border-b-2 hover:border-blue-600 transition hover:duration-300' href="#about">About me</a></li>
                    <li><a className='hover:text-blue-500 hover:border-b-2 hover:border-blue-600 transition hover:duration-300' href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </motion.header>
    )
}