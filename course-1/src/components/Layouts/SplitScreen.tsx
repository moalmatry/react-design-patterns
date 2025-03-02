"use client";
import React from "react";
import styled from "styled-components";

export interface SplitScreenProps {
  children: React.ReactNode;
  leftWeight?: number;
  rightWeight?: number;
}

const Container = styled.div`
  display: flex;
`;

interface PaneProps {
  weight: number;
}

const Pane = styled.div<PaneProps>`
  flex: ${(props) => props.weight};
`;

const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: SplitScreenProps) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreen;
