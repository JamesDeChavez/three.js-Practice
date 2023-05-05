import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import testTexture from '../../assets/uv-test-bw.png'
import './styles.css'

const FirstTexture = () => {
    const Cube = () => {
        const texture = useTexture({
            map: testTexture
        })
        return (
            <mesh rotation={[90, 0, 20]}>
                <boxBufferGeometry args={[3, 3, 3]} />
                <meshLambertMaterial map={texture['map']} />
            </mesh>
        )
    }
    const className = 'FirstTexture'
    return(
        <div className={className}>
            <h2 className={`${className}_header`}>First Texture</h2>
            <div className={`${className}_sceneContainer`}>
                <Canvas className={`${className}_canvas`}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} /> 
                    <Cube/>
                </Canvas>
            </div>
        </div>
    ) 
}

export default FirstTexture