import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './styles.css'

const ProjectTwo = () => {
    const className = 'ProjectTwo'
    return(
        <div className={className}>
            <h2 className={`${className}_header`}>Project Two</h2>
            <div className={`${className}_sceneContainer`}>
                <Canvas className={`${className}_canvas`}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} /> 
                    <mesh rotation={[90, 0, 20]}>
                        <boxBufferGeometry args={[3, 3, 3]} />
                        <meshLambertMaterial color="blue" />
                    </mesh>
                </Canvas>
            </div>
        </div>
    ) 
}

export default ProjectTwo