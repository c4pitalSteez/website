import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useSpring, animated } from '@react-spring/three';

function Box(props) {
  
  const ref = useRef()

  const texture = useLoader(TextureLoader, 'underConstruction.svg')
  
  const [hovered, hover] = useState(false)
  const springProps = useSpring({
    scale: hovered ? 1.7 : 1,
    config: { mass: 1, tension: 150, friction: 30 }
  });

  useFrame((state, delta) => (ref.current.rotation.y += 0.75 * delta))
  var x = 1
  useFrame((state, delta) => {
    x = Math.cos(ref.current.rotation.y) * 0.3
    ref.current.rotation.x += x * delta
  })
  var z = 1
  useFrame((state, delta) => {
    z = Math.cos(ref.current.rotation.y) * 0.3
    ref.current.rotation.z += z * delta
  })
  
  return (
    <animated.mesh
      {...props}
      class="Box"
      ref={ref}
      scale={springProps.scale}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'red'} map={texture} />
    </animated.mesh>
  )
}

export default Box