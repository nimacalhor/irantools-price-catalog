import React from "react";
import {
  Pagination as _Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/ui/pagination.ui";
import { fillToNumber } from "@/utils/array.util";

type PaginationProps = {
  onPageChange?: (newPage: number) => void;
  totalPages?: number;
  page?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: any;
  nextPage?: number;
  baseHref: string;
};

function Pagination({
  onPageChange,
  hasNextPage,
  hasPrevPage,
  nextPage,
  page,
  prevPage,
  totalPages,
  baseHref,
}: PaginationProps) {
  if (!page || !totalPages) return null;

  let group1: number[] = [],
    group2: number[] = [],
    group3: number[] = [];

  try {
    [group1, group2, group3] = getPaginateGroups(page, totalPages);
  } catch (error) {
    return null;
  }

  return (
    <>
      <_Pagination>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
        <PaginationContent>
          {hasPrevPage && <PaginationPrevious href={getHref(prevPage)} />}
          {group1.map((n, i) => (
            <PaginationLink href={getHref(n)} key={i} isActive={n === page}>
              {n}
            </PaginationLink>
          ))}
          {group2 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              {group2.map((n, i) => (
                <PaginationLink href={getHref(n)} key={i} isActive={n === page}>
                  {n}
                </PaginationLink>
              ))}
            </>
          )}
          {group3 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              {group3.map((n, i) => (
                <PaginationLink href={getHref(n)} key={i} isActive={n === page}>
                  {n}
                </PaginationLink>
              ))}
            </>
          )}
          {hasNextPage && nextPage && (
            <PaginationNext href={getHref(nextPage)} />
          )}
        </PaginationContent>
      </_Pagination>
    </>
  );

  function getHref(pageNumber: number) {
    return `${baseHref}?page=${pageNumber}`;
  }
}

export default Pagination;

export function getPaginateGroups(
  currentPage: number,
  totalPages: number
): number[][] {
  const [x, y] = [currentPage, totalPages];

  if (x <= 0 || y <= 0 || y < x) {
    throw new Error("current page should be less than total pages");
  }

  if (x <= 5) {
    if (y <= 5) return [Array.from({ length: totalPages }, (_, i) => i + 1)];
    return [Array.from({ length: 6 }, (_, i) => i + 1), [y - 2, y - 1, y]];
  }

  if (y - 5 > x && x > 5) {
    return [
      [1, 2, 3],
      Array.from({ length: 5 }, (_, i) => x - 2 + i),
      [y - 2, y - 1, y],
    ];
  }

  return [[1, 2, 3], fillToNumber(x, y)];
}
