export type CreateBrandResponse = {
  ok: boolean;
  data: {
    title: string;
    image: string;
    _id: string;
    __v: number;
  };
  statusCode: number;
  message: string;
};

export type BrandListResponse = {
  data: Array<{
    _id: string;
    title: string;
    image: {
      _id: string;
      path: string;
      __v: number;
    };
    __v: number;
  }>;
  ok: boolean;
  statusCode: number;
  pagination: {
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: any;
    nextPage: any;
  };
};

export type UpdateBrandResponse = {
  ok: boolean;
  data: {
    _id: string;
    title: string;
    image: string;
    __v: number;
  };
  statusCode: number;
  message: string;
  metadata: {
    reqBody: {
      title: string;
    };
  };
};
