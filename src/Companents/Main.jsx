import React from 'react'
import Post1 from './Post1'
import {Route, Routes} from 'react-router-dom';
import Lecture1 from './Lecture1';
import Rolik1 from './Rolik1';
import Material1 from './Material1'
import VideosRolik from './VideosRolik';
import SiteBar from './SiteBar'

function Main() {
  return (
    <main className='main'>
      <SiteBar />
      <Routes>
        <Route path='/lecture' element={<Lecture1 />}/>
        <Route path='/rolik' element={<Rolik1 />}/>
        <Route path='/material' element={<Material1 />}/>
      </Routes>
      <Post1 />
      <VideosRolik />
    </main>
  )
}

export default Main