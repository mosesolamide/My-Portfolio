import React,{useState, useRef, useEffect} from 'react'
import { motion,useAnimation, useInView } from 'framer-motion'
import { project } from '../ProjectData'

export default function Project({ variants }) {
    // states for is hovered?
    const [isHovered, setIsHovered] = useState(false)
    const [projectIndex,setIndex] = useState(null)

    // function for is hovered
    const hovered = () =>{
        setIsHovered(true)
    }
    const ref = useRef(null)
    const isInView = useInView(ref,{ threshold: 1 }) //works it in view
    const mainControl = useAnimation()
     
    useEffect(() =>{
        // if isInView is true start the animation "visible"
        if(isInView){
           mainControl.start("visible")
         }
    },[isInView]) // run everytime isInView changes

    const listOfProject = project.map( (eachProject,index) => {
        return(
            <div 
                key={index}
                className='relative shadow-md cursor-pointer p-2'
                onMouseEnter={ () => {
                    hovered()
                    setIndex(index)
                }}
                onMouseLeave={ () => setIsHovered(false)}
            >
                <img src={eachProject.img} alt="projects" />
                <p className='text-[12px] text-center mt-2'>{eachProject.title}</p>

            {/* condition render the dark layout */}
            {isHovered && projectIndex === index && (
                <div className='absolute top-0 left-0 w-full h-[314px] backdrop-blur-[1px] bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
                    <a 
                        className='
                        bg-blue-500 px-2 py-1 text-white rounded-[3px] hover:bg-blue-600 text-sm text-lato'
                        href={eachProject.link}
                        target='_blank'
                    >
                        View Project</a>
                </div>
            )}
            </div>
        )
    })

    return(
        <motion.section
            id='projects' 
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={mainControl}
            transition={{                    
                type: "tween",
                ease: "easeInOut",
                duration: 2,
                repeatType: "reverse"
            }}
         >
            <h2 className='text-3xl font-bold text-center'>Project</h2>
            <div className='grid grid-cols-[repeat(auto-fit,150px)] w-screen mt-8 justify-center px-8 md:px-10 gap-3 md:gap-6 place-items-center'>
                {listOfProject}
            </div>
        </motion.section>
    )
}