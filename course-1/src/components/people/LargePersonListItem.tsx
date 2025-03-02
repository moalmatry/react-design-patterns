import { people } from "@/data";
import React from "react";
interface LargePersonListItemProps {
  person: (typeof people)[0];
}
const LargePersonListItem = ({ person }: LargePersonListItemProps) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies: </h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

export default LargePersonListItem;
