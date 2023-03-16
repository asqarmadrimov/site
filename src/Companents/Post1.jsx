import React from 'react'
import Carusel from './Carusel'
import Post2 from './Post2'
import VideosRolik from './VideosRolik'
import SwiperCompanent from './Swiper'

function Post1() {
  return (
    <section>
      <div className='container-fuld'>
        <Carusel />
        {/* <Post2 /> */}
        <SwiperCompanent />
        <VideosRolik />
      </div>
    </section>
  )
}

export default Post1