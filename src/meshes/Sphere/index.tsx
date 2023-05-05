interface Props {
    x: number, 
    y: number,
    z: number
}

const Sphere: React.FC<Props> = ({ x, y, z }) => {
    return (
        <mesh rotation={[90, 0, 20]} position={[x, y, z]} >
            <sphereBufferGeometry args={[0.25, 16, 16]} />
            <meshStandardMaterial color={'indigo'} />
        </mesh>
    )
}

export default Sphere