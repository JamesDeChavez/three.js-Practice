import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import LastName from '../../groups/LastName'
import FirstName from '../../groups/FirstName'
import PendulumStand from '../../groups/PendulumStand'
import './styles.css'
import Font from '../../meshes/Font'
import { Vector3 } from 'three'

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
                <Canvas className={`${className}_canvas`} camera={{ position: [4, 4, 8] }}>
                    <SetCamera />
                    <directionalLight position={[0, 7, 5]} intensity={1} />
                    <ambientLight intensity={0.3} />
                    <OrbitControls />
                    <FirstName root={root} />
                    <LastName root={root} />
                    <PendulumStand />
                    <mesh>
                        <boxBufferGeometry args={[100,0.1,100]} />
                        <meshStandardMaterial color={'#141e30'} />
                    </mesh>
                    <group position={[-4, 3, 1.5]} rotation={[0, Math.PI/4.5, 0]} >
                        <Font text={"hi!"} position={new Vector3(0.25, -0.25, 1)} size={0.5} />
                        <mesh>
                            <boxBufferGeometry args={[0.2, 2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[1.8, 0, 0]}>
                            <boxBufferGeometry args={[0.2, 2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[1.8, 0, 1.8]}>
                            <boxBufferGeometry args={[0.2, 2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[0, 0, 1.8]}>
                            <boxBufferGeometry args={[0.2, 2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[.9, -.9, 0]} >
                            <boxBufferGeometry args={[2, 0.2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[.9, .9, 0]} >
                            <boxBufferGeometry args={[2, 0.2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[.9, -.9, 1.8]} >
                            <boxBufferGeometry args={[2, 0.2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[.9, .9, 1.8]} >
                            <boxBufferGeometry args={[2, 0.2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[0, 0.9, 0.9]} >
                            <boxBufferGeometry args={[0.2, 0.2, 2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[0, -0.9, 0.9]} >
                            <boxBufferGeometry args={[0.2, 0.2, 2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[1.8, 0.9, 0.9]} >
                            <boxBufferGeometry args={[0.2, 0.2, 2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[1.8, -0.9, 0.9]} >
                            <boxBufferGeometry args={[0.2, 0.2, 2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                    </group>
                    <group position={[-4, 1, 2]} rotation={[0, Math.PI/3, 0]} >
                        <Font text={"i'm"} position={new Vector3(0.1, -0.25, 1)} size={0.5} />
                        <mesh>
                            <boxBufferGeometry args={[0.2, 2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[1.8, 0, 0]}>
                            <boxBufferGeometry args={[0.2, 2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[1.8, 0, 1.8]}>
                            <boxBufferGeometry args={[0.2, 2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[0, 0, 1.8]}>
                            <boxBufferGeometry args={[0.2, 2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[.9, -.9, 0]} >
                            <boxBufferGeometry args={[2, 0.2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[.9, .9, 0]} >
                            <boxBufferGeometry args={[2, 0.2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[.9, -.9, 1.8]} >
                            <boxBufferGeometry args={[2, 0.2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[.9, .9, 1.8]} >
                            <boxBufferGeometry args={[2, 0.2, 0.2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[0, 0.9, 0.9]} >
                            <boxBufferGeometry args={[0.2, 0.2, 2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[0, -0.9, 0.9]} >
                            <boxBufferGeometry args={[0.2, 0.2, 2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[1.8, 0.9, 0.9]} >
                            <boxBufferGeometry args={[0.2, 0.2, 2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                        <mesh position={[1.8, -0.9, 0.9]} >
                            <boxBufferGeometry args={[0.2, 0.2, 2]} />
                            <meshStandardMaterial color={'#243B55'} />
                        </mesh>
                    </group>
                </Canvas>
            </div>
        </div>
    )
}

export default Pendulum