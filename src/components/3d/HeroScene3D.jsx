import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Icosahedron, Torus } from '@react-three/drei'

function RotatingFrame() {
  const ref = useRef()

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.25
  })

  return (
    <group ref={ref}>
      <Torus args={[2.2, 0.03, 16, 100]} rotation={[Math.PI / 2.2, 0.3, 0]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} wireframe />
      </Torus>
      <Torus args={[1.6, 0.02, 16, 80]} rotation={[Math.PI / 3, 0.8, 0.2]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} wireframe />
      </Torus>
    </group>
  )
}

function CoreShape() {
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.3}>
      <Icosahedron args={[0.6, 1]}>
        <meshStandardMaterial
          color="#222222"
          wireframe
          metalness={0.9}
          roughness={0.1}
        />
      </Icosahedron>
    </Float>
  )
}

export default function HeroScene3D() {
  return (
    <>
      <RotatingFrame />
      <CoreShape />
    </>
  )
}
