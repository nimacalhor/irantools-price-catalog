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
    }
  | { ok: false; message: string };
