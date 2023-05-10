import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Font from '../../meshes/Font'
import { Vector3 } from 'three'
import './styles.css'

const HeaderProject = () => {
    const className = 'HeaderProject'
    return(
        <div className={className}>
            <h2 className={`${className}_header`}>3D Header</h2>
            <div className={`${className}_sceneContainer`}>
                <Canvas className={`${className}_canvas`} camera={{ position: [0, 0, 5]}} >
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-1, 3, 3]} intensity={1} />
                    <group>
                        <Font text={'<'} position={new Vector3(-3.5, 0, 0)} color='#00C6BD' />
                        <Font text={'About'} position={new Vector3(-2.5, 0, 0)} />
                        <Font text={'/>'} position={new Vector3(2.5, 0, 0)} color='#00C6BD' />
                    </group>
                </Canvas>
            </div>
        </div>
    ) 
}

export default HeaderProject