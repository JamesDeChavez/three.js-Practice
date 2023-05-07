import { useState } from 'react'
import NavButtons from './components/NavButtons'
import HelloWorld from './components/HelloWorld'
import FirstTexture from './components/FirstTexture'
import MultipleObjects from './components/MultipleObjects'
import TrainProject from './components/TrainProject'
import BirdsProject from './components/BirdsProject'
import './App.css'
import { useGLTF } from '@react-three/drei'
import AllModels from './components/AllModels'

const App = () => {
  const RENDERS = ['HELLO_WORLD', 'FIRST_TEXTURE', 'MULTIPLE_OBJECTS', 'TRAIN', 'BIRDS', 'ALL_MODELS']
  const [render, setRender] = useState(RENDERS[0])
  const className = 'App'
  return (
    <div className={className}>
      <NavButtons RENDERS={RENDERS} setRender={setRender} />
      {{
        [RENDERS[0]]: <HelloWorld />,
        [RENDERS[1]]: <FirstTexture />,
        [RENDERS[2]]: <MultipleObjects />,
        [RENDERS[3]]: <TrainProject />,
        [RENDERS[4]]: <BirdsProject />,
        [RENDERS[5]]: <AllModels />
      }[render]}
    </div>
  )
}

useGLTF.preload('/src/assets/Parrot.glb')

export default App
