"use client";
import SplitScreen from "@/components/Layouts/SplitScreen";

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: "green" }}>Left!</h1>;
};

const RightHandComponent = () => {
  return <p style={{ backgroundColor: "red" }}>Right!</p>;
};

export default function Home() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
}
