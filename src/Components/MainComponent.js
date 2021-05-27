import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';
import DishDetail from './DishDetail';
import { DISHES } from './shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    
    this.setState({ selectedDish: dish});
}

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}></Menu>
        <DishDetail dish={} />
      </div>
    );
  } 
}

export default App;
