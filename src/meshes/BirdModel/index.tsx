import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { AnimationMixer } from "three"

interface Props {
    url: string
    x: number,
    y: number,
    z: number
}

const BirdModel: React.FC<Props> = ({ url, x, y, z }) => {
    const birdRef = useRef(null)
    const { scene, animations } = useGLTF(url)
    let mixer = new AnimationMixer(scene);
    animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
    })
    useFrame((_, delta) => {
        mixer.update(delta);
    });
    return (
        <mesh position={[x, y, z]} >
            <primitive object={scene} ref={birdRef} />
        </mesh>
    )
}

export default BirdModel
