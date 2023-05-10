import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import LastName from '../../groups/LastName'
import FirstName from '../../groups/FirstName'
import PendulumStand from '../../groups/PendulumStand'
import Desk from '../../meshes/Desk'
import HiCube from '../../meshes/HiCube'
import ImCube from '../../meshes/ImCube'
import Marble from '../../meshes/Marble'
import { Vector3 } from 'three'
import './styles.css'

const SetCamera = () => {    
    useFrame(state => state.camera.lookAt(2, 0, 0))
    return <perspectiveCamera />
}

const Pendulum = () => {
    const root = useRef<HTMLDivElement>(null)
    const className = 'Pendulum'
    return (
        <div className={className}>
            <h2 className={`${className}_header`}>Pendulum Project</h2>
            <div className={`${className}_sceneContainer`} ref={root}>
                <Canvas className={`${className}_canvas`} camera={{ position: [5, 4, 10] }} >
                    <SetCamera />
                    <directionalLight position={[0, 7, 5]} intensity={1} />
                    <ambientLight intensity={0.3} />
                    <Desk />
                    <FirstName root={root} />
                    <LastName root={root} />
                    <PendulumStand />
                    <HiCube />
                    <ImCube />
                    <Marble position={new Vector3(-15, 1, 0)} />
                    <Marble position={new Vector3(15, 1, -5)} />
                </Canvas>
            </div>
        </div>
    )
}

export default Pendulum