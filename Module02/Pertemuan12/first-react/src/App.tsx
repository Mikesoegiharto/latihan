import WelcomeMessage from '../components/WelcomeMessage'
import './App.css'
import FormPage from '../components/TesUseRef'
import Hitung from '../components/TesUseState'

function App() {
  return (
    <>
      <WelcomeMessage berak="kencing" />
      <FormPage />
      <Hitung />
    </>
  )
}

export default App
