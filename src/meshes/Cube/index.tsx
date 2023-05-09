import { useTexture } from "@react-three/drei"
import testTexture from '../../assets/desk.jpg'


const Cube = () => {
    const texture = useTexture({
        map: testTexture
    })
    return (
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry args={[3, 3, 3]} />
            <meshLambertMaterial map={texture['map']} />
        </mesh>
    )
}

export default Cube