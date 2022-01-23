import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import WordView from './Components/WordView'
import HomeView from './Components/HomeView'
import SingleWordView from './Components/SingleWordView'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/:word" element={<WordView />} />
        <Route path="/:word/:pos" element={<SingleWordView />} />
        <Route path="/pos/:part" element={<WordView />} />
      </Routes>
    </div>
  )
}

export default App
