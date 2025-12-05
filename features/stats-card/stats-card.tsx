import type { PropsWithChildren } from "react";
import { Card, CardContent } from "@/shared/components";

type StatsCardProps = {
  icon: React.ReactNode;
  title: string;
  value?: number | string;
} & PropsWithChildren;
export function StatsCard({ icon, title, value, children }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 ">
        {icon}
        <div className="flex flex-col items-start gap-1">
          <span className="text-xs">{title}</span>
          <span className="text-2xl font-bold">{value ?? children}</span>
        </div>
      </CardContent>
    </Card>
  );
}
