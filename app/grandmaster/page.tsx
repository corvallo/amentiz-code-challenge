export const dynamic = "force-dynamic";

import { getGrandMasters } from "@/entities/gm/model";
import { ProfileCard } from "@/features/profile-card";
import { Pagination } from "@/shared/components/pagination/pagination";

type GrandMastersPageProps = {
  searchParams?: Promise<{ page?: string }>;
};

export default async function GrandMastersPage({ searchParams }: GrandMastersPageProps) {
  const { page: searchParamPage } = (await searchParams) ?? {};
  const page = Number(searchParamPage) || 1;
  const { items, total } = await getGrandMasters(page - 1, 100);
  const totalPages = Math.ceil(total / 100);
  return (
    <div className="flex flex-col gap-4">
      <Pagination page={page} totalPages={totalPages} basePath="/grandmaster" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ username, displayName, title, avatarUrl }) => (
          <ProfileCard
            key={username}
            username={username}
            avatarUrl={avatarUrl}
            displayName={displayName}
            title={title}
            hasViewProfileAction={true}
          />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} basePath="/grandmaster" />
    </div>
  );
}
