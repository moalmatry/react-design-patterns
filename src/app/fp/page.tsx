import { BigSuccessButton, DangerButton } from "@/components/composition";
import RecursiveComponent from "@/components/RecursiveComponent";
import React from "react";
type Address = {
  street: string;
  city: string;
  country: string;
};

type Company = {
  name: string;
  role: string;
};

type SocialMedia = {
  platform: string;
  handle: string;
};

type Profile = {
  bio: string;
  interests: string[];
  socialMedia: SocialMedia[];
};

type User = {
  id: number;
  name: string;
  email: string;
  address: Address;
  company: Company;
  profile: Profile;
};

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Cairo",
    country: "Egypt",
  },
  company: {
    name: "Tech Innovators",
    role: "Software Engineer",
  },
  profile: {
    bio: "Passionate developer with a love for technology.",
    interests: ["coding", "reading", "travelling"],
    socialMedia: [
      {
        platform: "Twitter",
        handle: "@john_doe",
      },
      {
        platform: "LinkedIn",
        handle: "john-doe",
      },
    ],
  },
};

export default function Page() {
  return (
    <div>
      {/* <RecursiveComponent data={user} /> */}
      <DangerButton text="Test Button" />
      <BigSuccessButton text="Test Button" />
    </div>
  );
}
