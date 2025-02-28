import React, { Fragment } from "react";

interface RegularListProps<T> {
  items: T[];
  resourceName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemComponent: React.FC<any>;
}

const NumberedList = <T,>({
  itemComponent: ItemComponent,
  items,
  resourceName,
}: RegularListProps<T>) => {
  return (
    <>
      {items.map((item, i) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Fragment key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent {...{ [resourceName]: item }} />
        </Fragment>
      ))}
    </>
  );
};

export default NumberedList;
