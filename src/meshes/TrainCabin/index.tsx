
const TrainCabin = () => {
    return (
        <mesh position={[0, 0.5, 3]} >
            <boxBufferGeometry args={[2, 3, 3]} />
            <meshStandardMaterial color={'red'} />
        </mesh>
    )
}

export default TrainCabin