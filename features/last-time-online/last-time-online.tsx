import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/components";
import { ElapsedTime } from "./elapsed-time";

type LastTimeOnlineProps = { lastOnline: number | null };

export function LastTimeOnline({ lastOnline }: LastTimeOnlineProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Last time online</CardTitle>
      </CardHeader>
      <CardContent>
        <ElapsedTime lastOnline={lastOnline} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
