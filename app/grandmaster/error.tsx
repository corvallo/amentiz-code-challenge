"use client";

import { Button } from "@/shared/components";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GmError({ error, reset }: ErrorProps) {
  return (
    <div className="space-y-6 w-full">
      <h1 className="text-xl font-semibold">Error loading Grandmasters</h1>
      <p className="text-sm text-foreground">There might be a temporary issue with the Chess.com API.</p>
      <pre className="text-xs bg-foreground/10 p-6 rounded whitespace-pre-wrap wrap-break-word shadow-md shadow-foreground/10">
        {error.message}
      </pre>
      <Button onClick={() => reset()}>Retry</Button>
    </div>
  );
}
