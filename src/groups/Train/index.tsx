import { useRef } from 'react'
import { Group } from 'three'
import TrainNose from '../../meshes/TrainNose'
import TrainWheel from '../../meshes/TrainWheel'
import TrainChimney from '../../meshes/TrainChimney'
import TrainCabin from '../../meshes/TrainCabin'

const Train = () => {
    const wheels = [
        {x: 1, y: -0.5, z: 3.5, top: 1, bot: 1, height: 0.5},
        {x: -1, y: -0.5, z: 3.5, top: 1, bot: 1, height: 0.5},
        {x: 1, y: -1, z: -1.5, top: 0.5, bot: 0.5, height: 0.5},
        {x: 1, y: -1, z: 0, top: 0.5, bot: 0.5, height: 0.5},
        {x: 1, y: -1, z: 1.5, top: 0.5, bot: 0.5, height: 0.5},
        {x: -1, y: -1, z: -1.5, top: 0.5, bot: 0.5, height: 0.5},
        {x: -1, y: -1, z: 0, top: 0.5, bot: 0.5, height: 0.5},
        {x: -1, y: -1, z: 1.5, top: 0.5, bot: 0.5, height: 0.5}
    ]
    const groupRef = useRef<Group>(null)
    return (
        <group ref={groupRef} >
            <TrainNose />
            {wheels.map((wheel, i) => {
                return <TrainWheel  
                    x={wheel.x} y={wheel.y} z={wheel.z}
                    top={wheel.top} bot={wheel.bot} height={wheel.height}
                    key={i}
                />
            })}
            <TrainChimney />
            <TrainCabin />
        </group>
    )
}

export default Train