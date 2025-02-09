import React from 'react'

export default function NavBar(){
    return(
        <header className='fixed z-50 w-full top-0 shadow-md bg-white'>
            <nav className='py-4'>
                <ul className='flex text-[#333333] gap-3 justify-center text-sm'>
                    <li className='hover:text-blue-500 cursor-pointer hover:border-b-2 hover:border-blue-600 transition hover:duration-300'>Home</li>
                    <li className='hover:text-blue-500 cursor-pointer hover:border-b-2 hover:border-blue-600 transition hover:duration-300'>Project</li>
                    <li className='hover:text-blue-500 cursor-pointer hover:border-b-2 hover:border-blue-600 transition hover:duration-300'>About me</li>
                    <li className='hover:text-blue-500 cursor-pointer hover:border-b-2 hover:border-blue-600 transition hover:duration-300'>Contact me</li>
                </ul>
            </nav>
        </header>
    )
}