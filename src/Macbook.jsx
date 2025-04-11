import React from 'react'
import './App.css'
import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

// this is how you can add a 3d model in react fiber

const Macbook = () => {
  let model = useGLTF("./mac.glb")
  const texture = useTexture("./red.jpg")

  
  // meshes are the thing from which model is created like borders, edges are called meshes
  let meshes = {};

  // logic to fold the macbook
  model.scene.traverse((e)=>{
      meshes[e.name] = e;
  });
  // here is all the parts are shown from which the model is created and we'll use them to fold the laptop, and adding the texture
  console.log(meshes,"meshes object");
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = texture;
  meshes.matte.material.emissiveIntensity= 0;
  meshes.matte.material.metalness =1;
  meshes.matte.material.roughness =1;


  // scroll animation
  const data = useScroll();

  // use frame is best because it works on systems frame
  useFrame((state, delta)=>{
    meshes.screen.rotation.x= THREE.MathUtils.degToRad(180 - data.offset * 90 )
  })


  return (
    <group position={[0,-10,20]}>
    <primitive object={model.scene}/>
    </group>
  )
}

export default Macbook
