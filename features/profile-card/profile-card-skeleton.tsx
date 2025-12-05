import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/components";

export const ProfileCardSkeleton = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="animate-blur-out">
        <CardTitle className="flex items-start justify-between gap-4">
          <div className="h-12 w-12 rounded-md bg-foreground/10" />
          <div className="h-7 w-20 rounded-full bg-foreground/10" />
        </CardTitle>
      </CardHeader>
      <CardContent className="animate-blur-out">
        <div className="h-6 w-3/5 rounded bg-foreground/10" />
        <div className="h-6 w-3/4 rounded bg-foreground/10" />
      </CardContent>
      <CardFooter className="animate-blur-out justify-end">
        <div className="h-5 w-24 rounded bg-foreground/10" />
      </CardFooter>
    </Card>
  );
};
