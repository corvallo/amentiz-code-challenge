import { ProfileCardSkeleton } from "@/features/profile-card";
import { appConfig } from "@/shared/config/app-config";
import { grandMasterListStyle } from "./grand-master-grid.style";

export function GrandMastersGridSkeleton() {
  const pageSize = appConfig.GM_PAGE_SIZE;
  const { grid } = grandMasterListStyle();
  return (
    <div className={grid()}>
      {Array.from({ length: pageSize }).map((_, i) => {
        // biome-ignore lint/suspicious/noArrayIndexKey: required in this case
        return <ProfileCardSkeleton key={i} />;
      })}
    </div>
  );
}
