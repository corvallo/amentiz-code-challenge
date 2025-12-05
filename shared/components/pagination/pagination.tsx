import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../button/button";
import { paginationStyle } from "./pagination.style";

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
      <Button as={Link} title="Go to previous page" href={buildHref(basePath, page - 1)} disabled={!hasPrev}>
        <ChevronLeft width={18} height={18} /> Prev
      </Button>
      <span className="md:px-3">
        Page {page} of {totalPages}
      </span>
      <Button as={Link} title="Go to next page" href={buildHref(basePath, page + 1)} disabled={!hasNext}>
        Next <ChevronRight width={18} height={18} />
      </Button>
    </nav>
  );
};
