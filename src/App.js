import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <Router>
    <div>
      <NavBar />
      <div>
        <ItemListContainer greeting={'Excursiones en Septiembre'} />  
      </div>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryid' element={<ItemDetailContainer />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
