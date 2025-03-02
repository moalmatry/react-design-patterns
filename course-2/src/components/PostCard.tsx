import { Post } from "@/data";
import React from "react";
import { Card } from "./ui/card";
interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="px-4 py-2">
      <h2 className="mb-4 text-2xl font-bold">{post.title}</h2>
      <p>{post.content}</p>
    </Card>
  );
};

export default PostCard;
