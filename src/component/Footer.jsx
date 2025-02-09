import React from 'react'
import { FaSquareGithub } from "react-icons/fa6"
import { FaInstagram,FaPhoneAlt } from "react-icons/fa"

export default function Footer(){
    const date = new Date()
    
    return(
        <footer className='bg-[#333333] h-[80px] mt-20 w-[90vw] md:w-[96vw] mx-auto rounded-t-[4px] flex justify-center items-center text-white p-4 md:p-10'>
            <div className='mr-auto'>
                <p className='text-sm'>{` © ${date.getFullYear()} Moses`}</p>
            </div>
            <div className='flex gap-2'>
                <a href="" target='_blank'><FaSquareGithub /></a>
                <a href="" target='_blank'><FaInstagram /></a>
                <a href="" target='_blank'><FaPhoneAlt /></a>
            </div>
        </footer>
    )
} 