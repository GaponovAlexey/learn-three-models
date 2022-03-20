import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './model/Danse'

const Main = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default Main
