import * as React from 'react';
import { useEffect , useState } from 'react'

const IntroBlock = ({sampleProp}) => {
  
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    console.log(index);

    return () => {
      console.log('Component deleted');
      };
    },[]);



  return (
    <div className="" onClick={()=>{setIndex(index+1); console.log(index)}}>
        this is the intro block 
        {sampleProp}
    </div>  
  )}

export default IntroBlock;