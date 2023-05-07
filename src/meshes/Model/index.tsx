import { useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useEffect } from "react"
import { AnimationMixer, Vector3 } from "three"

interface Props {
    url: string,
    cameraPosition: Vector3
}

const Model: React.FC<Props> = ({ url, cameraPosition }) => {
    const modelRef = useRef(null)
    const { scene, animations } = useGLTF(url)
    const state = useThree()

    let mixer = new AnimationMixer(scene);
    animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
    })

    useFrame((_, delta) => {
        mixer.update(delta);
    })

    useEffect(() => {
        state.camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z)
    }, [cameraPosition])
    
    return (
        <mesh>
            <primitive object={scene} ref={modelRef} />
        </mesh>
    )
}

export default Model
