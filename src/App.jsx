import React from 'react'
import NavBar from './component/NavBar'
import Hero from './component/Hero'

function App() {

  return (
    <>
        <NavBar />
        <main className='p-4 flex flex-col items-center text-[#333333]'>
            <Hero />
        </main>
    </>
  )
}

export default App
