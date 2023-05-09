import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import MajorMonoDisplay from '../../assets/Major Mono Display_Regular.json'
import { extend } from "@react-three/fiber"
import { Vector3 } from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
extend({ TextGeometry })

interface Props {
    text: string,
    position: Vector3,
    size?: number
}


const Font: React.FC<Props> = ({text, position, size}) => {
    const font = new FontLoader().parse(MajorMonoDisplay)
    return (
        <mesh position={position} >
            <textGeometry args={[text, {font, size: size ?? 1, height: 0.3}]} />
            <meshStandardMaterial color={'#FFFFFF'} />
        </mesh>
    )
}

export default Font