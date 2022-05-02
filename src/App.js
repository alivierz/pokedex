import './App.css';
import { BrowserRouter, Route, Routes, Navigate, NavLink} from 'react-router-dom';
import HomePage from './pages/Home';//! componente HomePage
import Login from './pages/Login'; //! componente login
import PokemoInfo from './pages/pokemon'; //!componente del pokemon
import NavBar from './components/nav/navBar';
import { useState } from 'react';
function App() {
  //! estados
  const [ name, setName ] = useState('')

  //*Utilidad local storage
  
  //!constantes
  localStorage.setItem('user', name)
  
  const itemU = localStorage.getItem('user')
  
  

  return (
    <BrowserRouter >
        <NavBar/>
        <Routes>
          <Route path='/' element={<Login  handlerName={setName}/>}/>
          <Route path='/pokedex' element={itemU ? <HomePage trainer={itemU} /> : <Navigate to='/'/>}/>
          <Route path='/pokedex/pokemon/:id' element={itemU ? <PokemoInfo /> : <Navigate to='/'/>}/>
          <Route path='*' element={<Login  handlerName={setName}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
