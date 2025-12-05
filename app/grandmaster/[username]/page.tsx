import { getGrandMasterByUsername } from "@/entities/gm/model";
import { GoBack } from "@/features/go-back/go-back";
import { LastTimeOnline } from "@/features/last-time-online/last-time-online";
import { ProfileCard } from "@/features/profile-card";

type GrandMasterProfileProps = {
  params: Promise<{ username: string }>;
  searchParams?: Promise<{ from?: string }>;
};

const GrandMasterProfile = async ({ params, searchParams }: GrandMasterProfileProps) => {
  const { username } = await params;
  const { displayName, avatarUrl, title, lastOnline } = await getGrandMasterByUsername(username);
  const { from: searchParamPage } = (await searchParams) ?? {};

  const page = Number(searchParamPage) || 1;
  return (
    <>
      <GoBack
        href={{
          pathname: "/grandmaster",
          query: page > 1 ? { page: String(page) } : undefined,
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.4fr] gap-6">
        <ProfileCard username={username} avatarUrl={avatarUrl} displayName={displayName} title={title} />
        <LastTimeOnline lastOnline={lastOnline} />
      </div>
    </>
  );
};
export default GrandMasterProfile;
