
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Gallery from './pages/Gallery'
import Capture from './pages/Capture'
function App() {

  return (
    <div className="App">
   
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/capture" element={<Capture />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
