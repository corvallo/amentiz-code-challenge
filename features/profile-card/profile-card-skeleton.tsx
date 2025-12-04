import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/components";

export const ProfileCardSkeleton = () => {
  return (
    <Card className="animate-pulse">
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-4">
          <div className="h-12 w-12 rounded-md bg-neutral-200/20" />
          <div className="h-6 w-20 rounded-full bg-neutral-200/20" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-4 w-3/4 rounded bg-neutral-200/20" />
      </CardContent>
      <CardFooter className="justify-end">
        <div className="h-4 w-24 rounded bg-neutral-200/20" />
      </CardFooter>
    </Card>
  );
};
