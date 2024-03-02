export type ListCriteria = {
  limit?: number;
  page?: number;
  select?: string;
  sort?: string;
  populate?: string;
} & Record<string, any>;

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

export type OmitFields<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
