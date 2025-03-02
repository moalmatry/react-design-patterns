import React from "react";

interface RegularListProps<T> {
  items: T[];
  resourceName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemComponent: React.FC<any>;
}

const RegularList = <T,>({
  itemComponent: ItemComponent,
  items,
  resourceName,
}: RegularListProps<T>) => {
  return (
    <>
      {items.map((item, i) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <ItemComponent {...{ [resourceName]: item }} key={i} />
      ))}
    </>
  );
};

export default RegularList;
