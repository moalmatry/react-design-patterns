"use client";
import UnControlledOnboardingFlow from "@/components/UnControlledOnboardingFlow";
import React from "react";

const StepOne = ({ goToNext }: { goToNext?: () => void }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
const StepTwo = ({ goToNext }: { goToNext?: () => void }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
const StepThree = ({ goToNext }: { goToNext?: () => void }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={goToNext}>Next</button>
  </>
);

export default function OnboardingPage() {
  return (
    <div>
      <UnControlledOnboardingFlow onFinish={() => console.log("Finished!")}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnControlledOnboardingFlow>
    </div>
  );
}
