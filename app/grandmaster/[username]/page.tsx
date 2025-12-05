import type { Metadata } from "next";
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

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }): Promise<Metadata> {
  const { username } = await params;
  try {
    const gm = await getGrandMasterByUsername(username);
    return {
      title: `${gm.displayName} (${gm.username}) | Chess GM Profile`,
      description: `Profile page for ${gm.displayName}, titled ${gm.title}, including a live clock since last online on Chess.com.`,
      keywords: ["chess grandmaster", gm.username, gm.displayName, "chess profile"],
      alternates: {
        canonical: `/grandmaster/${gm.username}`,
      },
    };
  } catch {
    return {
      title: `${username} | Chess GM Profile`,
      description: `View the Chess.com profile for grandmaster ${username}.`,
    };
  }
}
