import React from 'react'

export default function NavBar(){
    return(
        <header className='fixed z-50 w-full top-0 shadow-md bg-white'>
            <nav className='py-4'>
                <ul className='flex text-[#333333] gap-3 justify-center text-sm'>
                    <li><a className='hover:text-blue-500 hover:border-b-2 hover:border-blue-600 transition hover:duration-300' href="#home">Home</a></li>
                    <li><a className='hover:text-blue-500 hover:border-b-2 hover:border-blue-600 transition hover:duration-300' href="#projects">Project</a></li>
                    <li><a className='hover:text-blue-500 hover:border-b-2 hover:border-blue-600 transition hover:duration-300' href="#about">About me</a></li>
                    <li><a className='hover:text-blue-500 hover:border-b-2 hover:border-blue-600 transition hover:duration-300' href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </header>
    )
}