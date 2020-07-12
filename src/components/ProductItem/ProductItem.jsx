import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const ProductItem = ({
  title,
  slug,
  description,
  price,
  stockItems,
  image,
}) => {
  return (
    <Card className="h-100 w-100">
      {image[0]?.url && (
        <CardImg
          top
          className="h-50 w-100"
          src={`http://localhost:1337${image[0]?.url}`}
          alt={image[0]?.name}
        />
      )}
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>${price}</CardSubtitle>
        <CardText>{description.substring(0, 40)}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
