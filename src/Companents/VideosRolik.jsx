import React from 'react';
import video1 from '../Utils/videos/1.mp4'

const VideosRolik = () => {
  return (
    <div className='my-3'>
      <div className="container-xl">
        <div className="videoRolik-inner p-0 m-0">
          <h2 className='videoRolik-title mx-2'> 
            Анатомия и физиология женской репродуктивной системы - обзор
          </h2>

          <video className='videoRolik' controls>
            <source src={video1} type="video/mp4" />
          </video>


        </div>
      </div>
    </div>
  )
}

export default VideosRolik