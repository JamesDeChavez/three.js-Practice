import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import MajorMonoDisplay from '../../assets/Major Mono Display_Regular.json'
import { extend, useFrame } from "@react-three/fiber"

extend({ TextGeometry })

const Font = () => {
    const font = new FontLoader().parse(MajorMonoDisplay)
    useFrame(state => {
        state.camera.lookAt(2.5, 0, 0)
    })
    return (
        <mesh>
            <textGeometry args={['james', {font, size: 1, height: 0.3}]} />
            <meshStandardMaterial color={'#FFFFFF'} />
        </mesh>
    )
}

export default Font