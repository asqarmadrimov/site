import React from 'react';
import video1 from '../Utils/videos/4.mp4'

function Rolik1() {
  return (
    <div className='my-3'>
      <div className="container-xl">
        <div className="videoRolik-inner p-0 m-0">
          <video className='videoRolik' controls autoPlay>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Rolik1