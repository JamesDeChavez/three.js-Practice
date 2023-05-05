import { useRef } from 'react'
import Sphere from '../../meshes/Sphere'
import './styles.css'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

const SphereGroup = () => {
    const groupRef = useRef<Group>(null)
    useFrame(({clock}) => {
        groupRef.current!.rotation.z = clock.getElapsedTime()
    })
    return (
        <group ref={groupRef} >
            {Array(21).fill(0).map((_, i) => {
                const adjustedIdx = i / 20
                const x = Math.cos(2 * Math.PI * adjustedIdx)
                const y = Math.sin(2 * Math.PI * adjustedIdx)
                const z = -adjustedIdx * 5
                return <Sphere key={i} x={x} y={y} z={z} />
            })}
        </group>
    )
}

export default SphereGroup