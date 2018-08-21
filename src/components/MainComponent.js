import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Menu } from './MenuComponents';
import { DishDetail } from './DishdetailComponent';
import { Header } from './HeaderComponent';
import { Footer } from './FooterComponent';
import { DISHES } from '../shared/dishes.js';
import Home from './HomeComponents';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId
    });
  }

  render() {
    const Homepage = () => {
      return <Home />;
    };

    return (
      <div className="Main">
        <Header />
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>

        <DishDetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}
