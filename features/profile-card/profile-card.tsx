import { ChevronRight, Trophy } from "lucide-react";
import Link from "next/link";
import { Avatar, Badge, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/components";
import { profileCardStyle } from "./profile-card.style";

type ProfileCardProps = {
  username: string;
  displayName: string;
  title: string;
  avatarUrl: string | null;
  hasViewProfileAction?: boolean;
};

export const ProfileCard = async ({
  username,
  displayName,
  avatarUrl,
  title,
  hasViewProfileAction = false,
}: ProfileCardProps) => {
  const { link, cardTitle, cardFooter, profileAction } = profileCardStyle();

  return (
    <Link href={`/grandmaster/${username}`} aria-label={`Open profile of ${displayName}`} className={link()}>
      <Card>
        <CardHeader>
          <CardTitle className={cardTitle()}>
            <Avatar src={avatarUrl} fallbackText={username} />
            <Badge title={`Role ${title}`}>
              <Trophy /> {title}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>{displayName}</CardContent>
        <CardFooter className={cardFooter()}>
          {hasViewProfileAction && (
            <div className={profileAction()}>
              View Profile <ChevronRight width={18} height={18} />
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};
