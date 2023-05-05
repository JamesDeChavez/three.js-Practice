import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './styles.css'
import Cube from '../../meshes/Cube'

const FirstTexture = () => {
    const className = 'FirstTexture'
    return(
        <div className={className}>
            <h2 className={`${className}_header`}>First Texture</h2>
            <div className={`${className}_sceneContainer`}>
                <Canvas className={`${className}_canvas`}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} /> 
                    <Cube />
                </Canvas>
            </div>
        </div>
    ) 
}

export default FirstTexture