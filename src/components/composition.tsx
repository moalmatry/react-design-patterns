/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type ButtonProps = {
  size: "large" | "small";
  color: string;
  text: string;
  [key: string]: any;
};

export const Button = ({ size, color, text, ...props }: ButtonProps) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const DangerButton = (props: any) => {
  return <Button color="red" {...props} />;
};

export const BigSuccessButton = (props: any) => {
  return <Button {...props} size="large" color="green" />;
};
