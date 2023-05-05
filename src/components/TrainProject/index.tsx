import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './styles.css'
import Train from '../../groups/Train'

const TrainProject = () => {
    const className = 'TrainProject'
    return (
        <div className={className}>
            <h2 className={`${className}_header`}>Train Project</h2>
            <div className={`${className}_sceneContainer`}>
                <Canvas 
                    className={`${className}_canvas`} 
                    camera={{position: [10, 0, 0]}}
                >
                    <axesHelper args={[10]} />
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 10]} intensity={1} />
                    <Train />
                </Canvas>
            </div>
        </div>
    )
}

export default TrainProject