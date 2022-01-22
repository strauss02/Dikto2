import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
  return (
    <Routes>
      <Route path="/:word" element={<WordView />} />
      <Route path="/:word/:pos" element={<WordView />} />
      <Route path="/pos/:part" element={<WordView />} />
    </Routes>
  )
}

export default App
