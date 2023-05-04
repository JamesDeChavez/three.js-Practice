import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './styles.css'

const HelloWorld = () => {
    const className = 'HelloWorld'
    return(
        <div className={className}>
            <h2 className={`${className}_header`}>Hello World Project</h2>
            <div className={`${className}_sceneContainer`}>
                <Canvas className={`${className}_canvas`}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 10]} intensity={1} />
                    <mesh rotation={[90, 0, 20]}>
                        <boxBufferGeometry args={[3, 3, 3]} />
                        <meshStandardMaterial color="blue" />
                    </mesh>
                </Canvas>
            </div>
        </div>
    ) 
}

export default HelloWorld