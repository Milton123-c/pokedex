
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Pokedex from './pages/Pokedex'
import Modal from './pages/Modal'

function App() {

  return (
    <div className='App'>

        <Routes>
            < Route path='/' element={<Home />} />

            <Route element={<ProtectedRoutes />}>
                <Route path='/pokedex' element={<Pokedex />} />
                <Route path='/pokedex/:name' element={<Modal />} />
            </Route>

            <Route path='*' element={<Home />} /> 
        </Routes>

    </div>
  )
}

export default App
