"use client";
import React, { useState } from "react";
import ControlledForm from "@/components/ControlledForm";
import UnControlledModal from "@/components/Layouts/UnControlledModal";
import LargeProductListItem from "@/components/products/LargeProductListItem";
import UnControlledForm from "@/components/UnControlledForm";
import { products } from "@/data";
import ControlledModal from "@/components/Layouts/ControlledModal";

export default function Page() {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <div>
      <ControlledModal
        onClose={() => {
          setShouldShow(false);
        }}
        shouldShow={shouldShow}
      >
        <h1>Modal Content</h1>
      </ControlledModal>
      <button onClick={() => setShouldShow((prev) => !prev)}>Show Modal</button>

      {/* <UnControlledModal>
        <LargeProductListItem product={products[0]} />
      </UnControlledModal> */}
      <UnControlledForm />
      <ControlledForm />
    </div>
  );
}
