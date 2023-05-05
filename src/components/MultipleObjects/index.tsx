import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SphereGroup from '../../groups/SphereGroup'
import './styles.css'

const MultipleObjects = () => {
    const className = 'MultipleObjects'
    return (
        <div className={className}>
            <h2 className={`${className}_header`}>Multiple Objects Project</h2>
            <div className={`${className}_sceneContainer`}>
                <Canvas className={`${className}_canvas`}>
                    <OrbitControls />
                    <hemisphereLight intensity={0.5} />
                    <directionalLight position={[10, 10, 10]} intensity={1} />
                    <SphereGroup />
                </Canvas>
            </div>
        </div>
    )
}

export default MultipleObjects