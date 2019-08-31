import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };

  }

  render() {

    return (
      <div className="App">
        <Navbar dark color="primary">
        </Navbar>
        <div className="container">
          <NavbarBrand href="/">
            Irina Ristorante Con Fusion
          </NavbarBrand>
          <Menu dishes={this.state.dishes}/>
        </div>
      </div>
    );
  }

}

export default App;
