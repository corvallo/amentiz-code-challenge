"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GmError({ error, reset }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Error loading Grandmasters</h1>
      <p className="text-sm text-muted-foreground">There might be a temporary issue with the Chess.com API.</p>
      <pre className="text-xs bg-muted p-2 rounded">{error.message}</pre>
      <button
        type="button"
        onClick={() => reset()}
        className={`gap-2 px-3 py-1 border rounded 
                    text-foreground border-foreground/30
                    hover:bg-foreground/5 hover:border-foreground/50
                    transition-colors duration-200 ease-out
                    cursor-pointer
        `}
      >
        Retry
      </button>
    </div>
  );
}
