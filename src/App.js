import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
// import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
      </Navbar>
      <div className="container">
        <NavbarBrand href="/">
          Irina Ristorante Con Fusion
        </NavbarBrand>
        <Menu />
      </div>
    </div>
  );
}

export default App;
