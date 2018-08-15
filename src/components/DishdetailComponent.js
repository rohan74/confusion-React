import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  //  display comment if present else empty div
  renderComments(comment) {
    let com = comment.map(item => {
      return (
        <div key={item.id}>
          <p>
            -- {item.author}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit'
            }).format(new Date(Date.parse(item.date)))}
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
    if (dish != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12 m-1" key={dish.id}>
              <Card key={dish.id}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1" key={dish.id}>
              <h4>Comments</h4>
              {this.renderComments(dish.comments)}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
