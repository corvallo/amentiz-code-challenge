import { ProfileCardSkeleton } from "@/features/profile-card";
import { appConfig } from "@/shared/config/app-config";

export function GrandMastersGridSkeleton() {
  const pageSize = appConfig.GM_PAGE_SIZE;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: pageSize }).map((_, i) => {
        // biome-ignore lint/suspicious/noArrayIndexKey: required in this case
        return <ProfileCardSkeleton key={i} />;
      })}
    </div>
  );
}
