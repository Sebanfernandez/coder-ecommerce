import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  const greeting = {bienvenida: 'Bienvenidos a Aventura Azul'}

  return (
    <div>
      <NavBar />
      <ItemListContainer 
      saludo = {greeting}
      />
    </div>
  );
}

export default App;
