import Link from "next/link";
import { paginationLinkStyle, paginationStyle } from "./pagination.style";

type PaginationProps = {
  page: number;
  totalPages: number;
  basePath?: string;
};

const buildHref = (basePath: string, page: number) => {
  const search = new URLSearchParams();
  search.set("page", String(page));
  return `${basePath}?${search.toString()}`;
};

export const Pagination = ({ page, totalPages, basePath = "" }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return (
    <nav className={paginationStyle()}>
      <Link href={buildHref(basePath, page - 1)} className={paginationLinkStyle({ disabled: !hasPrev })}>
        Prev
      </Link>
      <span>
        Page {page} of {totalPages}
      </span>
      <Link href={buildHref(basePath, page + 1)} className={paginationLinkStyle({ disabled: !hasNext })}>
        Next
      </Link>
    </nav>
  );
};
