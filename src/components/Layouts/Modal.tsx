"use client";
import React, { useState } from "react";
import styled from "styled-components";

interface ModalProps {
  children: React.ReactNode;
}

const ModalBackground = styled.div``;
const ModalBody = styled.div``;

const Modal = ({ children }: ModalProps) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <ModalBackground>
          <ModalBody>
            <button onClick={() => setShouldShow(false)}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
