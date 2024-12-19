"use client";

import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error(props: Props) {
  useEffect(() => {
    //! WARN -> errors messages should never be exposed in the client
    //? employ the useEffect to track the error in the server side.
    console.log(props.error);
  }, [props.error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => props.reset()}>
        Try Again
      </button>
    </main>
  );
}
