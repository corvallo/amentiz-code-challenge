import { getGrandMasterByUsername } from "@/entities/gm/model";
import { ProfileCard } from "@/features/profile-card";

type GrandMasterProfileProps = {
  params: Promise<{ username: string }>;
};

const GrandMasterProfile = async ({ params }: GrandMasterProfileProps) => {
  const { username } = await params;
  const { displayName, avatarUrl, title } = await getGrandMasterByUsername(username);
  return <ProfileCard username={username} avatarUrl={avatarUrl} displayName={displayName} title={title} />;
};
export default GrandMasterProfile;
