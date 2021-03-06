import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Menu } from './MenuComponents';
import { DishDetail } from './DishdetailComponent';
import { Header } from './HeaderComponent';
import { Footer } from './FooterComponent';
import Home from './HomeComponents';
import Contact from './ContactConponent';
import About from './AboutComponents';
import { DISHES } from '../shared/dishes.js';
import { LEADERS } from '../shared/leader.js';
import { PROMOTIONS } from '../shared/promotions.js';
import { COMMENTS } from '../shared/comments.js';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId
    });
  }

  render() {
    const Homepage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          promotion={this.state.promotions.filter(promo => promo.featured)[0]}
          leader={this.state.leaders.filter(lead => lead.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
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
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route excat path="/contactus" component={Contact} />
          <Route
            excat
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
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
