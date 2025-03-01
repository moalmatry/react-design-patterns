"use client";
import React, { useState, useEffect } from "react";

const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be at least 2 characters");
    } else {
      setNameInputError("");
    }
  }, [name, age, hairColor]);
  return (
    <form>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => Number(setAge(e.target.value))}
      />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default ControlledForm;
