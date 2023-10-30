import * as React from 'react';
import { useEffect , useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const AboutMe = () => {
  
  return (
    <div className="flex flex-col w-full h-full " onClick={()=>{}}>

      <div className='flex flex-col mt-40 mb-40'>

        <span className='text-xl'>
          lorem this is a lorem text about me !
        </span>
        <span className='flex flex-row justify start'>
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>

        </span>
      </div>
      
    </div>  
  )}

export default AboutMe;