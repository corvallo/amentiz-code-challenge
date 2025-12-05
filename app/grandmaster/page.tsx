import type { Metadata } from "next";
import { Suspense } from "react";
import { getGrandMastersCount } from "@/entities/gm/model";
import { Pagination } from "@/shared/components/pagination/pagination";
import { appConfig } from "@/shared/config/app-config";
import { GrandMastersGridSkeleton } from "@/widgets/grand-masters-grid";
import { GrandMastersGrid } from "@/widgets/grand-masters-grid/grand-masters-grid";

type GrandMastersPageProps = {
  searchParams?: Promise<{ page?: string }>;
};

export const metadata: Metadata = {
  title: "Chess Grandmasters | GM Wiki",
  description: "Discover every Chess.com Grandmaster.",
  keywords: ["chess grandmaster list", "chess.com gm", "chess wiki", "gm profiles"],
};

export default async function GrandMastersPage({ searchParams }: GrandMastersPageProps) {
  const { page: searchParamPage } = (await searchParams) ?? {};
  const pageSize = appConfig.GM_PAGE_SIZE;

  const page = Number(searchParamPage) || 1;
  const total = await getGrandMastersCount();
  const totalPages = Math.ceil(total / pageSize);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Pagination page={page} totalPages={totalPages} basePath="/grandmaster" />
      </div>
      <Suspense key={page} fallback={<GrandMastersGridSkeleton />}>
        <GrandMastersGrid page={page} pageSize={pageSize} />
      </Suspense>
      <div className="flex justify-end">
        <Pagination page={page} totalPages={totalPages} basePath="/grandmaster" />
      </div>
    </div>
  );
}
