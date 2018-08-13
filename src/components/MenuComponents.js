import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
  Button
} from 'reactstrap';

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };

    this.handleDish = this.onDishSelect.bind(this);
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish
    });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
          <Card
            onClick={() => {
              this.onDishSelect(dish);
            }}
          >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
              </CardBody>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-md-6 col-xl-8">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}
