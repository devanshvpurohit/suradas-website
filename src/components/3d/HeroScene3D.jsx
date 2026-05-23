import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Torus } from '@react-three/drei'
import QModel from './QModel'

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

export default function HeroScene3D() {
  return (
    <>
      <RotatingFrame />
      <QModel />
    </>
  )
}
