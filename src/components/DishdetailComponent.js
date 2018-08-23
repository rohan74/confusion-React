import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
  console.log(comment);

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
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
        <div className="row" key={dish.id}>
          <div className="col-md-5 col-12 m-1" key={dish.name}>
            <RenderDish dish={dish} />
          </div>
          <div className="col-12 col-md-5 m-1" key={dish.id}>
            <h4>Comments</h4>
            <RenderComments comment={props.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
