export type ListCriteria = {
  limit?: string;
  page?: string;
  select?: string;
  sort?: string;
  populate?: string;
};

export type ApiReturnType<D> =
  | {
      ok: true;
      data: D;
      pagination?: {
        totalDocs: number;
        limit: number;
        totalPages: number;
        page: number;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        prevPage?: number;
        nextPage?: number;
      };
    }
  | { ok: false; message: string };
