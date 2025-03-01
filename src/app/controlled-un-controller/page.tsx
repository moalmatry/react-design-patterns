"use client";
import ControlledForm from "@/components/ControlledForm";
import UnControlledForm from "@/components/UnControlledForm";
import React from "react";

export default function Page() {
  return (
    <div>
      <UnControlledForm />
      <ControlledForm />
    </div>
  );
}
