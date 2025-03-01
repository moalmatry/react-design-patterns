"use client";
import React from "react";

const UnControlledForm = () => {
  const nameInput = React.createRef<HTMLInputElement>();
  const ageInput = React.createRef<HTMLInputElement>();
  const hairColorInput = React.createRef<HTMLInputElement>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(nameInput.current?.value);
    console.log(ageInput.current?.value);
    console.log(hairColorInput.current?.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" ref={nameInput} />
      <input type="number" name="age" placeholder="Age" ref={ageInput} />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UnControlledForm;
