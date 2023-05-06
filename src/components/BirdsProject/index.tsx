import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import BirdModel from '../../meshes/BirdModel'
import Loader from '../../meshes/Loader'
import './styles.css'

const BirdsProject = () => {
    const className = 'BirdsProject'
    return (
        <div className={className}>
            <h2 className={`${className}_header`}>Birds Project</h2>
            <div className={`${className}_sceneContainer`}>
                <Canvas
                    className={`${className}_canvas`}
                    camera={{position: [300, 10, 0] }}
                >
                    <axesHelper args={[10]} />
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 10]} intensity={1} />
                    <Suspense fallback={<Loader/>} >
                        <BirdModel url={'/src/assets/Parrot.glb'} x={0} y={-100} z={100} />
                        <BirdModel url={'/src/assets/Flamingo.glb'} x={0} y={0} z={0} />
                        <BirdModel url={'/src/assets/Stork.glb'} x={0} y={100} z={-100} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

export default BirdsProject