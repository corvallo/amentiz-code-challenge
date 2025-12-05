import Link from "next/link";
import { getGrandMasters } from "@/entities/gm/model";
import { ProfileCard } from "@/features/profile-card";
import { grandMasterListStyle } from "./grand-master-grid.style";

type GrandMastersGridProps = {
  page: number;
  pageSize: number;
};
export async function GrandMastersGrid({ page, pageSize }: GrandMastersGridProps) {
  const { items } = await getGrandMasters(page - 1, pageSize);
  const { grid, link } = grandMasterListStyle();
  return (
    <div className={grid()}>
      {items.map(({ username, id, displayName, title, avatarUrl }) => (
        <Link
          key={id}
          href={{ pathname: `/grandmaster/${username}`, query: page > 1 ? { from: String(page) } : undefined }}
          aria-label={`Open profile of ${displayName}`}
          title={`Open profile of ${displayName}`}
          className={link()}
        >
          <ProfileCard
            username={username}
            avatarUrl={avatarUrl}
            displayName={displayName}
            title={title}
            hasViewProfileAction={true}
          />
        </Link>
      ))}
    </div>
  );
}
