import { useState, Suspense } from 'react'
import { Vector3 } from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../../meshes/Loader'
import Model from '../../meshes/Model'
import './styles.css'

const models = [
    { name: 'Parrot', url: '/src/assets/Parrot.glb', cameraPosition: new Vector3(300, 10, 0), lightPosition: new Vector3(0, 10, 200), axesLength: 500 },
    { name: 'Stork', url: '/src/assets/Stork.glb', cameraPosition: new Vector3(300, 10, 0), lightPosition: new Vector3(0, 10, 200), axesLength: 500 },
    { name: 'Flamingo', url: '/src/assets/Flamingo.glb', cameraPosition: new Vector3(300, 10, 0), lightPosition: new Vector3(0, 10, 200), axesLength: 500 },
    { name: 'Collision World', url: '/src/assets/collision-world.glb', cameraPosition: new Vector3(10, 0, 5), lightPosition: new Vector3(10, 30, 20), axesLength: 100 },
    { name: 'Ferrari', url: '/src/assets/ferrari.glb', cameraPosition: new Vector3(5, 2, -5), lightPosition: new Vector3(5, 10, 10), axesLength: 10 },
    { name: 'Horse', url: '/src/assets/Horse.glb', cameraPosition: new Vector3(400, 100, 100), lightPosition: new Vector3(0, 100, 200), axesLength: 500 },
    { name: 'Lamp', url: '/src/assets/IridescenceLamp.glb', cameraPosition: new Vector3(0, 0.5, 1), lightPosition: new Vector3(5, 5, 5), axesLength: 5 },
    { name: 'Dish With Olives', url: '/src/assets/IridescentDishWithOlives.glb', cameraPosition: new Vector3(0, 0.5, 1), lightPosition: new Vector3(5, 5, 5), axesLength: 5 },
    { name: 'Little Tokyo', url: '/src/assets/LittlestTokyo.glb', cameraPosition: new Vector3(100, 100, 600), lightPosition: new Vector3(0, 100, 200), axesLength: 500 },
    { name: 'Dancing Girl', url: '/src/assets/Michelle.glb', cameraPosition: new Vector3(0, 3, 2), lightPosition: new Vector3(5, 5, 5), axesLength: 5 },
    { name: 'Shader Ball', url: '/src/assets/ShaderBall.glb', cameraPosition: new Vector3(5, 5, 5), lightPosition: new Vector3(10, 10, 10), axesLength: 10 },
    { name: 'Hi In Ball', url: '/src/assets/ShadowmappableMesh.glb', cameraPosition: new Vector3(0, 100, 200), lightPosition: new Vector3(0, 100, 200), axesLength: 500 },
    { name: 'Chair', url: '/src/assets/SheenChair.glb', cameraPosition: new Vector3(1, 1, 1), lightPosition: new Vector3(3, 3, 3), axesLength: 5 },
    { name: 'Soldier', url: '/src/assets/Soldier.glb', cameraPosition: new Vector3(0, 1, -3), lightPosition: new Vector3(5, 5, -5), axesLength: 5 },
]

const AllModels = () => {
    const [index, setIndex] = useState(models.length - 1)
    const [name, setName] = useState(models[index].name)
    const [url, setUrl] = useState(models[index].url)
    const [cameraPosition, setCameraPosition] = useState(models[index].cameraPosition)
    const [lightPosition, setLightPosition] = useState(models[index].lightPosition)
    const [axesLength, setAxesLength] = useState(models[index].axesLength)

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, action: string) => {
        e.preventDefault()

        let newIndex
        if (action === 'Prev') newIndex = index === 0 ? models.length - 1 : index - 1
        else newIndex = (index + 1) % (models.length)

        setIndex(newIndex)
        setName(models[newIndex].name)
        setUrl(models[newIndex].url)
        setCameraPosition(models[newIndex].cameraPosition)
        setLightPosition(models[newIndex].lightPosition)
        setAxesLength(models[newIndex].axesLength)
    }

    const className = 'AllModels'
    return (
        <div className={className}>
            <h2 className={`${className}_header`}>All Models <a href="https://github.com/mrdoob/three.js/tree/master/examples/models/gltf">Link to Github</a></h2>
            <div className={`${className}_selectContainer`}>
                <button className={`${className}_button`} onClick={(e) => handleButtonClick(e, 'Prev')}>Prev</button>
                <p className={`${className}_name`} >{name}</p>
                <button className={`${className}_button`} onClick={(e) => handleButtonClick(e, 'Next')}>Next</button>
            </div>
            <div className={`${className}_sceneContainer`}>
                <Canvas className={`${className}_canvas`} camera={{position: cameraPosition}} >
                    <axesHelper args={[axesLength]} />
                    <OrbitControls />
                    <ambientLight />
                    <directionalLight position={lightPosition} intensity={1} />
                    <Suspense fallback={<Loader/>} >
                        <Model url={url} cameraPosition={cameraPosition} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

export default AllModels