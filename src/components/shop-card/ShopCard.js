import React from "react";
import { Card, Button } from "react-bootstrap";

const ShopCard = (props) => {
  const chooseItem = () => {
    console.log(`Ви обрали: ${props.card.name}`);
    alert(`Дякую за вибір ${props.card.name}`);
  };

  return (
    <Card>
      <Card.Img variant="top" src={props.card.img} alt={props.card.name} />
      <Card.Body>
        <Card.Title>{props.card.name}</Card.Title>
        <Card.Text>{props.card.description}</Card.Text>
        <Button variant="outline-secondary" onClick={chooseItem}>
          Виберіть цей варіант
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
