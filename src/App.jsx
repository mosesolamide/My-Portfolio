import React,{useEffect, useRef} from 'react'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import { motion,useAnimation, useInView } from 'framer-motion'
import Project from './component/Project'
import Footer from './component/Footer'
import About from './component/About'
import Contact from './component/Contact'


function App() {
  const ref = useRef(null)
  const isInView = useInView(ref,{once: true})
  const mainControl = useAnimation()

  useEffect(() =>{
      if(isInView){
          mainControl.start("visible")
      }
  },[isInView])
  return (
    <>
        <NavBar />
        <motion.main
          variants={{
             hidden: {opacity: 0, y: 75},
             visible: {opacity: 1, y: 0}
          }}
          // initial="hidden"
          // animate={mainControl}
          transition={{duration: 0.5, delay:0.25}}
          className='p-4 flex flex-col items-center text-[#333333]'
          ref={ref}
         >
            <Hero />
            <Project/>
            <About />
            <Contact />
        </motion.main>
        <Footer />
    </>   
  )
}

export default App
