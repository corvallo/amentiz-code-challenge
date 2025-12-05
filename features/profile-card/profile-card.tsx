import { ChevronRight, Trophy, User } from "lucide-react";
import { Avatar, Badge, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/components";
import { profileCardStyle } from "./profile-card.style";

type ProfileCardProps = {
  username: string;
  displayName: string;
  title: string;
  avatarUrl: string | null;
  hasViewProfileAction?: boolean;
};

export const ProfileCard = ({
  username,
  displayName,
  avatarUrl,
  title,
  hasViewProfileAction = false,
}: ProfileCardProps) => {
  const { cardTitle, cardFooter, profileAction } = profileCardStyle();

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="animate-blur-out">
        <CardTitle className={cardTitle()}>
          <Avatar src={avatarUrl} fallbackText={displayName} />
          <Badge title={`Role ${title}`}>
            <Trophy /> {title}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="animate-blur-out">
        <div className="flex flex-col gap-1">
          <h4 className="text-sm flex gap-1 items-center">
            <User width={12} height={12} />
            {username}
          </h4>
          <h3 className="font-medium">{displayName}</h3>
        </div>
      </CardContent>
    </Card>
  );
};
