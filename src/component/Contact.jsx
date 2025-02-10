import { object } from 'framer-motion/client'
import React,{useState} from 'react'

export default function Contact (){
 const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
 })
console.log(form)
 const handleChange = (e) =>{
    const {value,name} = e.target
    setForm(prev => ({
        ...prev,
        [name]:value
    }))
 }

 const submit = (e) =>{
    e.preventDefault()
 }
    return(
        <section id='contact'>
            <h5 className='font-bold text-2xl text-center'>Hire Me</h5>
            <form action="" className='mt-4 flex flex-col justify-center items-center'>
                <div className='flex flex-col'>
                    <label htmlFor="name" className='font-bold text-md'>Fullname</label>
                    <input 
                        type="text" 
                        id='name' 
                        placeholder='joe' 
                        className='border-1 p-2 w-[295px] sm:w-[350px] md:w-[400px] indent-3 rounded-sm my-2'
                        value={form.name}
                        onChange={handleChange} 
                        name='name'
                        required
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="email" className='font-bold text-md' >Email</label>
                    <input 
                        type="email" 
                        id='email' 
                        placeholder='joe@gmail.com' 
                        className='border-1 p-2 w-[295px] sm:w-[350px] md:w-[400px] indent-3 rounded-sm mt-2' 
                        value={form.email}
                        name='email'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='mt-2'>
                    <label htmlFor="message" className='font-bold text-md'>Message</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        className='block border-1 w-[295px] sm:w-[350px] md:w-[400px] mt-4 indent-3' 
                        placeholder='enter your message'
                        value={form.message}
                        onChange={handleChange}
                        required
                    >

                    </textarea>
                </div>

                <button 
                    className='bg-blue-500 mt-5 px-4 py-1 w-[295px] sm:w-[350px] md:w-[400px] text-white rounded-sm hover:bg-blue-600'
                    onClick={submit}
                >Submit</button>
            </form>
        </section>
    )
}