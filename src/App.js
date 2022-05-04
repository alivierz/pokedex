import './App.css';
import { Route, Routes, Navigate, HashRouter} from 'react-router-dom';
import HomePage from './pages/Home';//! componente HomePage
import Login from './pages/Login'; //! componente login
import PokemoInfo from './pages/pokemon'; //!componente del pokemon
import NavBar from './components/nav/navBar';
import Encounters from './pages/encounters';
import { useState } from 'react';
function App() {
  //! estados
  const [ name, setName ] = useState('')

  //*Utilidad local storage
  
  //!constantes
  localStorage.setItem('user', name)
  
  const itemU = localStorage.getItem('user')
  
  return (
    <HashRouter >
        <NavBar/>
        <Routes>
          <Route path='/' element={<Login  handlerName={setName}/>}/>
          <Route path='/pokedex' element={itemU ? <HomePage trainer={itemU} /> : <Navigate to='/'/>}/>
          <Route path='/pokedex/pokemon/:id' element={itemU ? <PokemoInfo /> : <Navigate to='/'/>}/>
          <Route path='/pokedex/pokemon/:id/encounters'  element={itemU ? <Encounters /> : <Navigate to='/'/>}/>
          <Route path='*' element={<Login  handlerName={setName}/>}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
