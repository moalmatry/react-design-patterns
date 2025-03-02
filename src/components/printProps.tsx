import React from "react";

export const printProps = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WrappedComponent = (props: P) => {
    console.log(props);

    return <Component {...props} />;
  };

  return WrappedComponent;
};
