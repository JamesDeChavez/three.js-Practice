import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './styles.css'
import FirstNamePendulum from '../../groups/FirstNamePendulum'
import LastName from '../../groups/LastName'
import FirstName from '../../groups/FirstName'
import FirstNameStand from '../../groups/FirstNameStand'

const SetCamera = () => {    
    useFrame(state => state.camera.lookAt(4, 0.5, -5))
    return <perspectiveCamera />
}

const Pendulum = () => {
    const root = useRef<HTMLDivElement>(null)
    const className = 'Pendulum'
    return (
        <div className={className}>
            <h2 className={`${className}_header`}>Pendulum Project</h2>
            <div className={`${className}_sceneContainer`} ref={root}>
                <Canvas className={`${className}_canvas`} camera={{ position: [4, 1, 7] }}>
                    <SetCamera />
                    <directionalLight position={[0, 1, 1]} intensity={1} />
                    <ambientLight intensity={0.1} />
                    <OrbitControls />
                    <FirstName root={root} />
                    <LastName root={root} />
                    <FirstNameStand />
                </Canvas>
            </div>
        </div>
    )
}

export default Pendulum