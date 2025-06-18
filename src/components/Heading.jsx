import React from 'react'

const Heading = ({text1,text2}) => {
  return (
    <h2 className='text-4xl font-semibold tracking-wide text-center p-4 m-[1rem]'>{text1} <span className='text-[#fdc700]'>{text2}</span></h2>
  )
}

export default Heading