import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <div>
      <NavBar />
      <div>
        <ItemListContainer greeting={'Excursiones en Septiembre'} />  
      </div>
    </div>
  );
}

export default App;
