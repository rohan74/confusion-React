import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComments(comment) {
    let com = comment.map(item => {
      return (
        <div key={item.id}>
          <p>
            -- {item.author} {item.date}
          </p>
          <p>{item.comment}</p>
        </div>
      );
    });

    if (comment != null) {
      return com;
    } else {
      return <div />;
    }
  }

  render() {
    const { dish } = this.props;
    return (
      <div className="row" key={dish.id}>
        <div className="col-md-5 col-12 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {this.renderComments(dish.comments)}
        </div>
      </div>
    );
  }
}
