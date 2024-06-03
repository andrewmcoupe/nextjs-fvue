"use server";

import { Photo } from "../types";

const albumId = 4;

export const fetchPhotos = async (): Promise<Photo[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_start=0&_limit=20`,
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch photos");
  }

  return res.json();
};
