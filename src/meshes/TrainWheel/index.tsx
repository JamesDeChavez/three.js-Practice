import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

interface Props {
    x: number,
    y: number,
    z: number,
    top: number,
    bot: number,
    height: number
}

const TrainWheel: React.FC<Props> = ({x, y, z, top, bot, height}) => {
    const wheelRef = useRef<Mesh>(null)
    useFrame(({clock}) => {
        wheelRef.current!.rotation.x = -clock.getElapsedTime()
    })
    return (
        <mesh rotation={[0, 0, Math.PI/2]} position={[x, y, z]} ref={wheelRef} >
            <cylinderBufferGeometry args={[top, bot, height]} />
            <meshStandardMaterial color={'black'} />
        </mesh>
    )
}

export default TrainWheel