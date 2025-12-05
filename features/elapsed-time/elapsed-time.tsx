"use client";
import { useEffect, useState } from "react";
import { computeTimeDiff } from "@/shared/lib/time-utils";

type ElapsedTimeeProps = { lastOnline: number | null };
export function ElapsedTime({ lastOnline }: ElapsedTimeeProps) {
  const [elapsedTime, setElapsedTime] = useState(() => computeTimeDiff(lastOnline));

  useEffect(() => {
    if (!lastOnline) return;
    const id = setInterval(() => setElapsedTime(computeTimeDiff(lastOnline)), 1000);
    return () => clearInterval(id);
  }, [lastOnline]);

  return <>{elapsedTime}</>;
}
