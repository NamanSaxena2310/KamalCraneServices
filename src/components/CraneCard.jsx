import React from 'react'
import cImage4 from '../assets/Crane-Images/c4.jpg'
const CraneCard = () => {
  return (
  <div className="card bg-white text-black w-96 shadow-lg shadow-slate-500">
  <figure>
    <img
      src={cImage4}
      alt={""}
      className='scale-100 transition-all duration-300 ease-in-out hover:scale-120'
       />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-warning text-black">Read More</button>
    </div>
  </div>
</div>
  )
}

export default CraneCard