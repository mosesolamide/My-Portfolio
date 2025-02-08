import React,{useState} from 'react'
import { project } from '../ProjectData'

export default function Project() {
    // states for is hovered?
    const [isHovered, setIsHovered] = useState(false)
    const [projectIndex,setIndex] = useState(null)

    // function for is hovered
    const hovered = () =>{
        setIsHovered(true)
    }

    const listOfProject = project.map( (eachProject,index) => {
        return(
            <div 
                key={index}
                className='relative w-[150px] h-[250px]'
                onMouseEnter={ () => {
                    hovered()
                    setIndex(index)
                }}
                onMouseLeave={ () => setIsHovered(false)}
            >
                <img src={eachProject.img} alt="projects" />
                <p>{eachProject.title}</p>

            {/* condition render the dark layout */}
            {isHovered && projectIndex === index && (
                <div className='absolute top-0 left-0 w-full h-[301px] backdrop-blur-[1px] bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
                    <button 
                        className='
                        bg-blue-500 px-4 py-2 text-white rounded-[3px] hover:bg-blue-600 text-sm text-lato'
                    >
                        View Project</button>
                </div>
            )}
            </div>
        )
    })

    return(
        <section>
            <h2 className='text-3xl font-bold text-center'>Project</h2>
            <div className='grid grid-cols-[repeat(2,minmax(200px,1fr))] grid-rows-1 mt-8'>
                {listOfProject}
            </div>
        </section>
    )
}