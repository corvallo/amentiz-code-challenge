import { getGrandMasterByUsername } from "@/entities/gm/model";
import { LastTimeOnline } from "@/features/last-time-online/last-time-online";
import { ProfileCard } from "@/features/profile-card";

type GrandMasterProfileProps = {
  params: Promise<{ username: string }>;
};

const GrandMasterProfile = async ({ params }: GrandMasterProfileProps) => {
  const { username } = await params;
  const { displayName, avatarUrl, title, lastOnline } = await getGrandMasterByUsername(username);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.4fr] gap-6">
      <ProfileCard username={username} avatarUrl={avatarUrl} displayName={displayName} title={title} />
      <LastTimeOnline lastOnline={lastOnline} />
    </div>
  );
};
export default GrandMasterProfile;
