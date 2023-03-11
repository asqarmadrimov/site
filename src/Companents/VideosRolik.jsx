import React from 'react';
import video1 from '../Utils/videos/1.mp4'

const VideosRolik = () => {
  return (
    <section>
      <div className="container-xl">
        <video width={350} height={300} controls>
          <source src={video1} type="video/mp4"/>
        </video>
      </div>
    </section>
  )
}

export default VideosRolik