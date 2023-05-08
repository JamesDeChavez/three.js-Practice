import { Canvas } from '@react-three/fiber'
import Font from '../../meshes/Font'
import './styles.css'

const Pendelum = () => {

    const className = 'Pendelum'
    return (
        <div className={className}>
            <h2 className={`${className}_header`}>Pendelum Project</h2>
            <div className={`${className}_sceneContainer`}>
                <Canvas className={`${className}_canvas`} camera={{ position: [2.5, 1, 5] }}>
                    <directionalLight position={[0, 1, 1]} intensity={1} />
                    <ambientLight intensity={0.1} />
                    <Font />
                </Canvas>
            </div>
        </div>
    )
}

export default Pendelum