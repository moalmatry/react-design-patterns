"use client";
import React from "react";
import styled from "styled-components";

interface ModalProps {
  children: React.ReactNode;
  shouldShow: boolean;
  onClose: () => void;
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;
const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

const ControlledModal = ({ children, onClose, shouldShow }: ModalProps) => {
  //   const [shouldShow, setShouldShow] = useState(false);

  return (
    shouldShow && (
      <ModalBackground onClick={onClose}>
        <ModalBody onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose}>Hide Modal</button>
          {children}
        </ModalBody>
      </ModalBackground>
    )
  );
};

export default ControlledModal;
