/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { ReactElement, ReactNode } from "react";

interface ControlledOnboardingFlowProps {
  children: ReactNode;
  onFinish: (data: Record<string, any>) => void;
  currentIndex: number;
  onNext: (stepData: Record<string, any>) => void;
}

const ControlledOnboardingFlow = ({
  children,
  onFinish,
  currentIndex,
  onNext,
}: ControlledOnboardingFlowProps) => {
  const currentChild = React.Children.toArray(children)[
    currentIndex
  ] as ReactElement<{ goToNext: (stepData: Record<string, any>) => void }>;

  const goToNext = (stepData: Record<string, any>) => {
    onNext(stepData);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};

export default ControlledOnboardingFlow;
