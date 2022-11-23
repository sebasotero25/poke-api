
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import InputName from './components/InputName'
import PokemonDetail from './components/PokemonDetail'
import Pokemons from './components/Pokemons'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
 

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<InputName/>}/>
        
        <Route element={<ProtectedRoutes/>}>
        <Route path="/pokemons" element={<Pokemons/>}/>
        <Route path="/pokemons/:id" element={<PokemonDetail/>}/>
        </Route>

      </Routes>
    </HashRouter>
    // <div className="App">
    
    // </div>
  )
}

export default App
