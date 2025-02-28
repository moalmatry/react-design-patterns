import { people } from "@/data";
import React from "react";
interface SmallPersonListItemProps {
  person: (typeof people)[0];
}

const SmallPersonListItem: React.FC<SmallPersonListItemProps> = ({
  person,
}) => {
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};

export default SmallPersonListItem;
