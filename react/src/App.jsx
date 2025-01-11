import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Box from './components/Box'
import './App.css'

function App() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[0, 0, 0]}></Box>
    </Canvas>
  )
}

export default App