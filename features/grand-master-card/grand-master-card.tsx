import { ChevronRight, Trophy } from "lucide-react";
import Link from "next/link";
import type { GrandMaster } from "@/entities/gm/types";
import {
  Avatar,
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components";

type GrandMasterCardProps = { gm: GrandMaster; hasViewProfileAction?: boolean };

export const GrandMasterCard: React.FC<GrandMasterCardProps> = ({
  gm,
  hasViewProfileAction = false,
}) => {
  return (
    <fieldset className="border-0 p-0 m-0">
      <legend className="sr-only">Profile link for {gm.displayName}</legend>
      <Link
        href={`/grandmaster/${gm.username}`}
        aria-label={`Open profile of ${gm.displayName}`}
        className="focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-xl block"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-start justify-between">
              <Avatar src={gm.avatarUrl} fallbackText={gm.username} />
              <Badge title={gm.title}>
                <Trophy /> {gm.title}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>{gm.displayName}</CardContent>
          <CardFooter className="text-sm justify-end">
            {hasViewProfileAction && (
              <div className="flex gap-1 items-center">
                View Profile <ChevronRight width={18} height={18} />
              </div>
            )}
          </CardFooter>
        </Card>
      </Link>
    </fieldset>
  );
};
