"use server";

import { Post } from "../types";
import { fetchCommentsForPost } from "./fetch-comments-for-post";

export const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts");
  }

  const posts = (await res.json()) as Post[];

  const comments = await Promise.all(
    posts?.map(async (post: Post) => await fetchCommentsForPost(post.id)),
  );

  return posts.map((post: Post, index) => ({
    ...post,
    comments: comments[index],
  })) as Post[];
};
