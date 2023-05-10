import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import './styles.css'

const HtmlProject = () => {
    const className = 'HtmlProject'
    return(
        <div className={className}>
            <h2 className={`${className}_header`}>Html On Box</h2>
            <div className={`${className}_sceneContainer`}>
                <Canvas camera={{ position: [0, 1, 2] }} >
                    <ambientLight intensity={0.1} />
                    <directionalLight position={[-2, 2, 2]} intensity={1} />
                    <OrbitControls />
                    <group>
                        <mesh>
                            <boxBufferGeometry args={[2.5, 1, 1]} />
                            <meshStandardMaterial color="#243B55" />
                            <Html transform>
                                <p style={{ fontSize: '0.5rem', color: '#FFFFFF'}} >Test</p>
                            </Html>
                        </mesh>
                    </group>   
                </Canvas>
            </div>
            <div className='scroll' >Div For Scroll Trigger</div>
        </div>
    ) 
}

export default HtmlProject