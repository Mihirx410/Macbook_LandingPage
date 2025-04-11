import { Canvas } from '@react-three/fiber'
import React from 'react'
import './App.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import Macbook from './Macbook'

// you can't print html inside the canvas

const App = () => {
  return (
    <Canvas camera={{fov: 12, position:[0,4,220]}}>

        {/* <OrbitControls/> */}


      {/* Scroll from drei for scroll bar */}
      <ScrollControls pages={4}>
        <Macbook/>
        {/* For HDRI lighting from link */}
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/stierberg_sunrise_4k.hdr']} />
      </ScrollControls>

        
    </Canvas>
  )
}

export default App
