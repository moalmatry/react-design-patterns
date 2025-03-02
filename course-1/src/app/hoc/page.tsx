import LargePersonListItem from "@/components/people/LargePersonListItem";
import { printProps } from "@/components/printProps";
import { people } from "@/data";
import React from "react";

const UserInfo = printProps(LargePersonListItem);

export default function HocPage() {
  return (
    <div>
      <UserInfo person={people[0]} />
    </div>
  );
}
