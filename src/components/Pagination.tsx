import {
  Pagination as _Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/ui/pagination.ui";
import { createArray } from "@/utils/array.util";

import React from "react";

type PaginationProps = {
  pages: number;
  prevPage?: number | undefined | null;
  nextPage?: number | undefined | null;
  onPageChange?: (page: number) => void;
  basePath?: string;
};

function Pagination({
  pages,
  basePath,
  nextPage,
  onPageChange,
  prevPage,
}: PaginationProps) {
  return (
    <>
      <_Pagination>

          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        <PaginationContent>
          {createArray(pages).map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink href={createHref(i + 1)}>{i + 1}</PaginationLink>
            </PaginationItem>
          ))}


          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
        </PaginationContent>
      </_Pagination>
    </>
  );

  function createHref(page: number) {
    return `${basePath}/${page}`;
  }
}

export default Pagination;
