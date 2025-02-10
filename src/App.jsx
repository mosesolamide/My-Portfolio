import React from 'react'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import Project from './component/Project'
import Footer from './component/Footer'
import About from './component/About'
import Contact from './component/Contact'


function App() {
  const variant = {
    hidden: {opacity: 0, x: -200},
    visible: {opacity: 1, x: 0}
  }


//   variants={{
//     hidden: {opacity: 0, x: -200},
//     visible: {opacity: 1, y: 0}
//  }}
 // initial="hidden"
 // animate={mainControl}
//  transition={{duration: 0.5, delay:0.25}}
//  ref={ref}
  return (
    <>
        <NavBar />
        <main  className='p-4 flex flex-col items-center text-[#333333]'>
            <Hero />
            <Project variants={variant} />
            <About variants={variant} />
            <Contact variants={variant} />
        </main>
        <Footer />
    </>   
  )
}

export default App
