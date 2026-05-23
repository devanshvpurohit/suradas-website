import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture, Float, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

export default function QModel() {
  const meshRef = useRef()
  const texture = useTexture('/q.png')
  
  // Ensure the texture looks good on both sides
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <RoundedBox
        ref={meshRef}
        args={[1.5, 1.5, 0.1]} // Width, Height, Depth
        radius={0.1} // Radius of the rounded corners
        smoothness={4} // Number of segments for the rounded corners
      >
        <meshStandardMaterial
          map={texture}
          roughness={0.2}
          metalness={0.8}
          transparent
          alphaTest={0.5}
        />
      </RoundedBox>
    </Float>
  )
}
