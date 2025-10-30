import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Math from './pages/Math'
import Philosophy from './pages/Philosophy'
import History from './pages/History'
import Culture from './pages/Culture'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/math" element={<Math />} />
      <Route path="/philosophy" element={<Philosophy />} />
      <Route path="/history" element={<History />} />
      <Route path="/culture" element={<Culture />} /> */}
    </Routes>
  )
}

export default App