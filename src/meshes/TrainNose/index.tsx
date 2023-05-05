
const TrainNose = () => {
    return (
        <mesh rotation={[Math.PI/2, 0, 0]} >
            <cylinderBufferGeometry args={[1, 1, 4]} />
            <meshStandardMaterial color={'red'} />
        </mesh>
    )
}

export default TrainNose