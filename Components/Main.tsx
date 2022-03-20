import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './model/Danse'

const Main = () => {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Main
