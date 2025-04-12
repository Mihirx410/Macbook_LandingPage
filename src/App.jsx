import { Canvas } from '@react-three/fiber'
import React from 'react'
import './App.css'
import { Environment, ScrollControls } from '@react-three/drei'
import Macbook from './Macbook'

// you can't print html inside the canvas

const App = () => {
  return (

    <div className='w-full h-screen bg-black'>
      <div className='navbar line flex py-2 gap-14 text-white absolute top-2 left-1/2 -translate-x-1/2'>
  {["iPhone", "iPad", "Macbook", "Watch", "Airpods", "Mac", "AirTag", "Support"].map((e) => (
    <a href='' className='font-[500] capitalize text-sm' key={e}>{e}</a>
  ))}
</div>
<div className='absolute top-32 left-1/2 -translate-x-1/2 flex flex-col items-center w-full'>
  <h3 className='masked text-7xl font-[700] text-white font-[Font3] tracking-tight'>macbook pro</h3>
  <h5 className='font-[Font3] mt-1'>Built For Apple Intelligence!</h5><br/>
  <p className='text-center w-3/11 tracking-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, reiciendis corporis deserunt, esse quas eligendi placeat aperiam expedita explicabo.</p>
</div>
        
    <Canvas camera={{fov: 13, position:[0,4,180]}}>

      {/* Scroll from drei for scroll bar */}
      <ScrollControls pages={4}>
        <Macbook/>
        {/* For HDRI lighting from link */}
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/stierberg_sunrise_4k.hdr']} />
      </ScrollControls>
        
    </Canvas>
    </div>
  )
}

export default App
