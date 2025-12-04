"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GmError({ error, reset }: Props) {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">
        Errore nel caricamento dei Grandmasters
      </h1>
      <p className="text-sm text-muted-foreground">
        Potrebbe esserci un problema temporaneo con l&apos;API di Chess.com.
      </p>
      <pre className="text-xs bg-muted p-2 rounded">{error.message}</pre>
      <button
        type="button"
        onClick={() => reset()}
        className="px-3 py-1 rounded bg-black text-white text-sm"
      >
        Retry
      </button>
    </div>
  );
}
