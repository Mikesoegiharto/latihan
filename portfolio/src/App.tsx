import './App.css'
import './index.css'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import FollowCursor from '../components/cursor/FollowCursor'
import { useEffect, useState } from 'react'

function App() {
  //untuk dark mode
  const [dark, setDark] = useState(false)

    useEffect(() => {
        if (dark) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [dark])


  return (
    <>
      <div>
      <Home dark={dark} setDark={setDark}/>
      <About />
      <FollowCursor />
      <Projects />
      <Contact />
      </div>
    </>
  )
}

export default App
