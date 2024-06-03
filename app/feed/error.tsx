"use client";

import { useEffect } from "react";

// Error component to display when fetching posts fails

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong fetching posts!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
