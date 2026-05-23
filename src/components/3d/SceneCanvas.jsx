import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

export default function SceneCanvas({
  children,
  className = 'h-full w-full',
  camera = { position: [0, 0, 5], fov: 45 },
}) {
  return (
    <div className={className}>
      <Canvas
        camera={camera}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -3, -5]} intensity={0.3} />
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}
