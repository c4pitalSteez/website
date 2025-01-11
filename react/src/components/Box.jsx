import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three';

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const springProps = useSpring({
    scale: hovered ? 1.5 : 1,
    config: { mass: 1, tension: 150, friction: 30 }
  });
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <animated.mesh
      {...props}
      class="Box"
      ref={ref}
      scale={springProps.scale}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </animated.mesh>
  )
}

export default Box