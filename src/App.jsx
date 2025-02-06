import React,{useEffect, useRef} from 'react'
import NavBar from './component/NavBar'
import Hero from './component/Hero'
import { easeIn, motion,useAnimation, useInView } from 'framer-motion'


function App() {
  const ref = useRef(null)
  const isInView = useInView(ref,{once: true})
  const mainControl = useAnimation()
  const slideControl = useAnimation()

  useEffect(() =>{
      if(isInView){
          mainControl.start("visible")
          slideControl.start("visible")
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
          initial="hidden"
          animate={mainControl}
          transition={{duration: 0.5, delay:0.25}}
          className='p-4 flex flex-col items-center text-[#333333]'
          ref={ref}
         >
            <Hero />
        </motion.main>
        <motion.div
          variants={{
            hidden:{left: 0},
            visible: {left: "100%"}
          }}
          initial="hidden"
          animate={slideControl}
          transition={{duration:0.5, ease:"easeIn"}}
          style={{
            position:"absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background:"blue",
            zIndex: 20
          }}
        />
    </>   
  )
}

export default App
