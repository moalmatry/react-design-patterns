import { products } from "@/data";
import React from "react";

interface LargeProductListItemProps {
  product: (typeof products)[0];
}

const LargeProductListItem = ({ product }: LargeProductListItemProps) => {
  const { name, price, description, rating } = product;
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  );
};

export default LargeProductListItem;
