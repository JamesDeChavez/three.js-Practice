import { useState } from 'react'
import NavButtons from './components/NavButtons'
import HelloWorld from './components/HelloWorld'
import FirstTexture from './components/FirstTexture'
import './App.css'

const App = () => {
  const RENDERS = ['HELLO_WORLD', 'FIRST_TEXTURE']
  const [render, setRender] = useState(RENDERS[0])
  const className = 'App'
  return (
    <div className={className}>
      <NavButtons RENDERS={RENDERS} setRender={setRender} />
      {{
        [RENDERS[0]]: <HelloWorld />,
        [RENDERS[1]]: <FirstTexture />
      }[render]}
    </div>
  )
}

export default App
