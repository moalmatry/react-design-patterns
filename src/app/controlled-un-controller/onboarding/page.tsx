/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ControlledOnboardingFlow from "@/components/ControlledOnboardingFlow";
import { useState } from "react";

const StepOne = ({
  goToNext,
}: {
  goToNext?: ({ name }: { name: string }) => void;
}) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext && goToNext({ name: "Mohamed" })}>
      Next
    </button>
  </>
);
const StepTwo = ({
  goToNext,
}: {
  goToNext?: ({ age }: { age: number }) => void;
}) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext && goToNext({ age: 90 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }: { goToNext?: () => void }) => (
  <>
    <h1>Step 3</h1>
    <p>You Are So Good</p>
    <button onClick={goToNext}>Next</button>
  </>
);
const StepFour = ({ goToNext }: { goToNext?: () => void }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={goToNext}>Next</button>
  </>
);

export default function OnboardingPage() {
  const [onboardingData, setOnboardingData] = useState<Record<string, any>>({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const onNext = (stepData: Record<string, any>) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div>
      {/* <UnControlledOnboardingFlow onFinish={() => console.log("Finished!")}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnControlledOnboardingFlow> */}
      <ControlledOnboardingFlow
        onFinish={() => {}}
        currentIndex={currentIndex}
        onNext={onNext}
      >
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </div>
  );
}
