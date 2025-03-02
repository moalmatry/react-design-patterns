/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, ReactNode, ReactElement } from "react";

interface UnControlledOnboardingFlowProps {
  children: ReactNode;
  onFinish: (data: Record<string, any>) => void;
}

const UnControlledOnboardingFlow = ({
  children,
  onFinish,
}: UnControlledOnboardingFlowProps) => {
  const [onboardingData, setOnboardingData] = useState<Record<string, any>>({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentChild = React.Children.toArray(children)[
    currentIndex
  ] as ReactElement<{ goToNext: (stepData: Record<string, any>) => void }>;

  const goToNext = (stepData: Record<string, any>) => {
    const nextIndex = currentIndex + 1;
    const updatedData = {
      ...onboardingData,
      ...stepData,
    };

    console.log(updatedData);
    if (Array.isArray(children) && nextIndex < children.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      onFinish(updatedData);
    }
    setOnboardingData(updatedData);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};

export default UnControlledOnboardingFlow;
