import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

function RenderDish({ dish }) {
  return (
    <Card key={dish.id}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comment }) {
  return comment.map(item => {
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
}

export const DishDetail = props => {
  const { dish } = props;
  if (dish != null) {
    return (
      <div className="container">
        <div className="row" key={dish.id}>
          <div className="col-md-5 col-12 m-1" key={dish.name}>
            <RenderDish dish={dish} />
          </div>
          <div className="col-12 col-md-5 m-1" key={dish.id}>
            <h4>Comments</h4>
            <RenderComments comment={dish.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
