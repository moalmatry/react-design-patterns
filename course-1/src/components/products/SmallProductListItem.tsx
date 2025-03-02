import { products } from "@/data";
import React from "react";

interface SmallProductListItemProps {
  product: (typeof products)[0];
}

export const SmallProductListItem = ({
  product,
}: SmallProductListItemProps) => {
  const { name, price } = product;
  return (
    <h3>
      {name} - {price}
    </h3>
  );
};
