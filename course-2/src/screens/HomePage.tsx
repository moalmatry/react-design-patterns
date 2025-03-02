"use client";
import PostFeed from "@/components/PostFeed";
import { posts as dummyPosts, Post } from "@/data";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [posts] = useState<Post[]>(dummyPosts);
  useEffect(() => {}, []);
  return (
    <div className="container py-4">
      <h1 className="mb-8 text-center text-4xl font-bold">Home Page</h1>
      <div className="mx-auto w-[500px]">
        <PostFeed posts={posts} />
      </div>
    </div>
  );
};

export default HomePage;
