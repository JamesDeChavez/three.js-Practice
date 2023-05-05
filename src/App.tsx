import { useState } from 'react'
import NavButtons from './components/NavButtons'
import HelloWorld from './components/HelloWorld'
import FirstTexture from './components/FirstTexture'
import './App.css'
import MultipleObjects from './components/MultipleObjects'
import TrainProject from './components/TrainProject'

const App = () => {
  const RENDERS = ['HELLO_WORLD', 'FIRST_TEXTURE', 'MULTIPLE_OBJECTS', 'TRAIN']
  const [render, setRender] = useState(RENDERS[0])
  const className = 'App'
  return (
    <div className={className}>
      <NavButtons RENDERS={RENDERS} setRender={setRender} />
      {{
        [RENDERS[0]]: <HelloWorld />,
        [RENDERS[1]]: <FirstTexture />,
        [RENDERS[2]]: <MultipleObjects />,
        [RENDERS[3]]: <TrainProject />
      }[render]}
    </div>
  )
}

export default App
