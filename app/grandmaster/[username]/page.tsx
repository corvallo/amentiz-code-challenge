import { getGrandMasterByUsername } from "@/entities/gm/model";
import { GrandMasterCard } from "@/features/grand-master-card";

type GrandMasterProfileProps = {
  params: Promise<{ username: string }>;
};

const GrandMasterProfile = async ({ params }: GrandMasterProfileProps) => {
  const { username } = await params;
  const gm = await getGrandMasterByUsername(username);

  return <GrandMasterCard gm={gm} />;
};
export default GrandMasterProfile;
