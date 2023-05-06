import { useRef } from 'react'
import { Group } from 'three'

const Birds = () => {
    const groupRef = useRef<Group>(null)
    return (
        <group ref={groupRef} >

        </group>
    )
}

export default Birds