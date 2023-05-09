import { useState } from 'react'
import NavButtons from './components/NavButtons'
import HelloWorld from './components/HelloWorld'
import FirstTexture from './components/FirstTexture'
import MultipleObjects from './components/MultipleObjects'
import TrainProject from './components/TrainProject'
import BirdsProject from './components/BirdsProject'
import AllModels from './components/AllModels'
import Pendulum from './components/Pendulum'
import './App.css'

const App = () => {
  const RENDERS = ['HELLO_WORLD', 'FIRST_TEXTURE', 'MULTIPLE_OBJECTS', 'TRAIN', 'BIRDS', 'ALL_MODELS', 'PENDELUM']
  const [render, setRender] = useState(RENDERS[RENDERS.length - 1])
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
        [RENDERS[5]]: <AllModels />,
        [RENDERS[6]]: <Pendulum />
      }[render]}
    </div>
  )
}

export default App
