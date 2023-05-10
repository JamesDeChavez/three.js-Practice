import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Header3D from '../../groups/3dHeader'
import './styles.css'

const HeaderProject = () => {
    const className = 'HeaderProject'
    return(
        <div className={className}>
            <h2 className={`${className}_header`}>3D Header</h2>
            <div className={`${className}_sceneContainer`}>
                <Canvas className={`${className}_canvas`} camera={{ position: [0, 0, 5]}} >
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.1} />
                    <directionalLight position={[-1, 3, 3]} intensity={1} />
                    <Header3D text={'contact'} />
                </Canvas>
            </div>
        </div>
    ) 
}

export default HeaderProject