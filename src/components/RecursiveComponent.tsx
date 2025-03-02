import React from "react";

const isObject = (x: unknown) => typeof x === "object" && x !== null;
const RecursiveComponent = ({ data }: { data: object }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);
  return (
    <>
      {pairs.map(([key, value]) => (
        <li key={key}>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
};

export default RecursiveComponent;
