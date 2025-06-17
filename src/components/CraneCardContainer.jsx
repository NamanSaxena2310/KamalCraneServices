import React from 'react'
import CraneCard from './CraneCard'

const CraneCardContainer = () => {
  return (
    <div className=' max-w-7xl mx-auto'>
    <div className='grid grid-cols-3 gap-10 '>
    <CraneCard/>
    <CraneCard/>
    <CraneCard/>
    <CraneCard/>
    <CraneCard/>
    <CraneCard/>
    </div>
    </div>
   
  )
}

export default CraneCardContainer