
interface Props {
    x: number,
    y: number,
    z: number,
    top: number,
    bot: number,
    height: number
}

const TrainWheel: React.FC<Props> = ({x, y, z, top, bot, height}) => {
    return (
        <mesh rotation={[0, 0, Math.PI/2]} position={[x, y, z]} >
            <cylinderBufferGeometry args={[top, bot, height]} />
            <meshStandardMaterial color={'black'} />
        </mesh>
    )
}

export default TrainWheel