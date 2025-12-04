import { getGrandMasters } from "@/entities/gm/model";
import { ProfileCard } from "@/features/profile-card";

type GrandMastersGridProps = {
  page: number;
  pageSize: number;
};
export async function GrandMastersGrid({ page, pageSize }: GrandMastersGridProps) {
  const { items } = await getGrandMasters(page - 1, pageSize);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(({ username, id, displayName, title, avatarUrl }) => (
        <ProfileCard
          key={id}
          username={username}
          avatarUrl={avatarUrl}
          displayName={displayName}
          title={title}
          hasViewProfileAction={true}
        />
      ))}
    </div>
  );
}
