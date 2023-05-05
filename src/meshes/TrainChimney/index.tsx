
const TrainChimney = () => {
    return (
        <mesh rotation={[0, Math.PI/2, 0]} position={[0, 1.2, -1.5]} >
            <cylinderBufferGeometry args={[0.5, 0.1, 0.5]} />
            <meshStandardMaterial color={'black'} />
        </mesh>
    )
}

export default TrainChimney