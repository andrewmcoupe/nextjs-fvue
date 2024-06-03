"use server";

import { Comment } from "../types";

export const fetchCommentsForPost = async (
  postId: number,
): Promise<Comment[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch comments for post");
  }

  return res.json();
};
