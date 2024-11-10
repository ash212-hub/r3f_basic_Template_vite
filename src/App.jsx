 
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Html, OrbitControls, Scroll } from '@react-three/drei'
 

function App() {
  

  return (
    <>
  <div className='w-[100vw] h-[100vh]'>
         
  <Canvas>
      <mesh  >
        <boxGeometry/>
        <meshNormalMaterial />
        <OrbitControls />
      
     
      </mesh>
     </Canvas>
  </div>
         
    </>
  )
}

export default App
