import React from 'react';
import Heropic from  './Hero.jpeg';
import './hero.css';
import { useTypewriter ,Cursor} from 'react-simple-typewriter';
import { Typewriter } from 'react-simple-typewriter'
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import Resume from '../components/21341A0505_Ajay.pdf'

 
export default function Hero() {
const {text}=useTypewriter({
words:['Developer','Designer','Freelancer'],
loop:0,
typeSpeed:120,

})

  return (
  <div className='p-4 sm:pr-36 sm:pl-36'>
      <p className='flex items-center justify-center m-5'><a href='/'>Home</a><span> / </span><a href='/about'>About</a></p>
    <div className='flex flex-col items-center justify-center sm:flex-row'>
        <div className='lex flex-col items-center justify-center '>
            <img src={Heropic} alt="hero" className='w-3/6 sm:w-3/4 m-auto' />
        </div>
      <div className='flex items-center justify-center  flex-col-reverse sm:flex-col sm:w-5/6'>
            {/* <h1>I'm a <span style={{fontWeight:'bold',color:'green'}}>{text}</span><span style={{color:'red'}}><Cursor/></span></h1> */}
          <div> <h1>I'm a <span  style={{fontWeight:'bold',color:'green'}}><Typewriter
            words={['Developer','Designer','Freelancer']}
            loop={5}
            cursor
            cursorStyle='😀'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span></h1>
            <p className='text-justify'>
            Experienced Full-Stack Developer proficient in Next.js,
React.js, and TailwindCSS for frontend development,
with expertise in Express, Node.js, MongoDB for
backend implementation. Skilled in translating designs
into high-quality code, building reusable components,
and optimizing applications for a seamless user
experience. Dedicated to delivering robust solutions
and staying updated with the latest technologies to
drive innovation and efficiency in development
processes.
            </p>
            </div> 
            <a href={Resume} download='resume' target="_blank" className='p-2 m-4 border rounded-sm max-w-40 '>Resume</a>
      </div>
      </div>
       </div>
  )
}
