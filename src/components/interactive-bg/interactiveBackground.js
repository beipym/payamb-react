import * as React from 'react';
import { useEffect , useState } from 'react'

const InteractiveBackground = ({sampleProp}) => {



  return (
    <div className="bg-blue-100 w-full h-full" >
        {sampleProp}
    </div>  
  )}

export default InteractiveBackground;