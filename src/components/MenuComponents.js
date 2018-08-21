import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card key={dish.id} onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
        </CardBody>
      </CardImgOverlay>
    </Card>
  );
}

export const Menu = props => {
  const menu = props.dishes.map(dish => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};
