import * as React from 'react';
import { useEffect , useState } from 'react'

const IntroBlock = () => {
  
  function openLink(link){

  }


  return (
    <div className="flex flex-col w-screen h-[75vh]" onClick={()=>{}}>

      <div className='flex flex-col mt-40 mb-40'>

        <span className=' text-4xl'> Hi 👋🏻 </span>
        <span className='mt-4 text-4xl'> My Name is Payam </span>
        
        <span className='mt-4 text-4xl'> 
          Im a Software Engineer ,and I mostly do 
          <span className='underline hover:cursor-pointer'>FrontEnd</span> 
          Development . 
        </span>

      </div>

      <div className='flex flex-row justify-end px-16 gap-8'>
        <a href='https://ir.linkedin.com/in/payam-beirami' target='_blank' className='text-black'><button className='p-4 w-32 border text-xl font-medium border-black hover:text-white hover:border-none hover:bg-black'>Linkedin</button></a>
        <a href='https://github.com/beipym' target='_blank' className='text-black'><button className='p-4 w-32 border text-xl font-medium border-black hover:text-white hover:border-none hover:bg-black'>GitHub</button></a>
      </div>
      
    </div>  
  )}

export default IntroBlock;