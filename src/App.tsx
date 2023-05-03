import { useState } from 'react'
import NavButtons from './components/NavButtons/NavButtons'
import './App.css'
import HelloWorld from './components/HelloWorld/HelloWorld'
import ProjectTwo from './components/ProjectTwo/ProjectTwo'

const App = () => {
  const RENDERS = ['HELLO_WORLD', 'PROJECT_TWO']
  const [render, setRender] = useState(RENDERS[0])
  const className = 'App'
  return (
    <div className={className}>
      <NavButtons RENDERS={RENDERS} setRender={setRender} />
      {{
        [RENDERS[0]]: <HelloWorld />,
        [RENDERS[1]]: <ProjectTwo />
      }[render]}
    </div>
  )
}

export default App
