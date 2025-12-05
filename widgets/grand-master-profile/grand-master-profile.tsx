import { Clock, Trophy, Users } from "lucide-react";
import { getGrandMasterByUsername } from "@/entities/gm/model";
import { ElapsedTime } from "@/features/elapsed-time";
import { ProfileCard } from "@/features/profile-card";
import { StatsCard } from "@/features/stats-card";

type GrandMasterProfileProps = { username: string };
export async function GrandMasterProfile({ username }: GrandMasterProfileProps) {
  const { displayName, avatarUrl, title, lastOnline, followers, league } = await getGrandMasterByUsername(username);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="md:col-span-3">
        <ProfileCard username={username} avatarUrl={avatarUrl} displayName={displayName} title={title} />
      </div>
      {lastOnline && (
        <StatsCard icon={<Clock width={50} height={50} />} title="Last time online">
          <ElapsedTime lastOnline={lastOnline} />
        </StatsCard>
      )}
      {followers && <StatsCard icon={<Users width={50} height={50} />} title="Followers" value={followers} />}
      {league && <StatsCard icon={<Trophy width={50} height={50} />} title="League" value={league} />}
    </div>
  );
}
