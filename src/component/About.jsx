import React from 'react'

export default function About(){
    return(
        <section className='max-w-2xl mx-auto p-6 text-center'>
            <h4 className='text-2xl mt-8 font-bold'>About Me</h4>

            <p className="font-bold text-sm mt-8">Hi, I'm Moses</p>
            <p className="text-md">
                A passionate web developer who loves turning ideas into functional and beautiful websites.
            </p>

            <p className="mt-2">
                I specialize in building responsive, user-friendly websites using modern frameworks like React and Tailwind CSS to ensure fast and efficient performance.
            </p>

            <p className="mt-2">
                I’m passionate about creating seamless user experiences and solving real-world problems through code. Every project is an opportunity to learn and grow.
            </p>

            <div className="mt-6">
                <a
                    href="#projects"
                    className="bg-blue-500 text-white px-3 md:px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    View My Projects
                </a>
                <a
                    href="#contact"
                    className="ml-4 border-2 border-blue-500 text-blue-500 px-3 md:px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                >
                    Contact Me
                </a>
            </div>

            <p className="mt-6">
               When I’m not coding, you can find me exploring new tech trends, playing video games, or playing football.
            </p>
        </section>
    )
}


// Hi, I'm Moses.
// A passionate web developer who loves turning ideas into functional and beautiful websites.

// I turn complex problems into simple, beautiful, and intuitive solutions.

// I specialize in building responsive, user-friendly websites using modern technologies like:

// HTML, CSS, and JavaScript

// React and Tailwind CSS

// I’ve successfully delivered projects for clients in industries like e-commerce, education, and healthcare. I’m also certified in React and Node.js.

// When I’m not coding, you can find me exploring new tech trends, playing video games, or enjoying a good cup of coffee.

// [View My Projects] [Contact Me]


{/* <section className="max-w-2xl mx-auto p-6 text-center">
<h1 className="text-3xl font-bold">Hi, I'm Moses</h1>
<p className="mt-2 text-lg">
  A passionate web developer who loves turning ideas into functional and beautiful websites.
</p>

<p className="mt-4">
  I specialize in building responsive, user-friendly websites using modern technologies like:
</p>
<ul className="mt-2 list-disc list-inside text-center">
  <li>HTML, CSS, and JavaScript</li>
  <li>React and Tailwind CSS</li>
</ul>

<p className="mt-4">
  I’m passionate about creating seamless user experiences and solving real-world problems through code. Every project is an opportunity to learn and grow.
</p>

<div className="mt-6">
  <a
    href="#projects"
    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
  >
    View My Projects
  </a>
  <a
    href="#contact"
    className="ml-4 border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
  >
    Contact Me
  </a>
</div>

<p className="mt-4">
  When I’m not coding, you can find me exploring new tech trends, playing video games, or enjoying a good cup of coffee.
</p>
</section> */}