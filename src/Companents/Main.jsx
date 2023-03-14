import React from 'react'
import Post1 from './Post1'
import {Route, Routes} from 'react-router-dom';
import Lecture1 from './Lecture1';
import Rolik1 from './Rolik1';
import Material1 from './Material1'
import SiteBar from './SiteBar'
import Lecture2 from './Lecture2';
import Rolik2 from './Rolik2';
import Rolik3 from './Rolik3';
import Lecture3 from './Lecture3';

function Main() {
  return (
    <main className='main'>
      <SiteBar />
      <Routes>
        <Route path='/' element={<Post1 />}/>
        <Route path='/lecture' element={<Lecture1 />}/>
        <Route path='/lecture2' element={<Lecture2 />}/>
        <Route path='/lecture3' element={<Lecture3 />}/>
        <Route path='/rolik' element={<Rolik1 />}/>
        <Route path='/rolik2' element={<Rolik2 />}/>
        <Route path='/rolik3' element={<Rolik3 />}/>
        <Route path='/material' element={<Material1 />}/>
      </Routes>
      {/* <Post1 /> */}
      {/* <Post2 /> */}
      {/* <VideosRolik /> */}
    </main>
  )
}

export default Main