
export type CreateBrandResponse = {
  ok: true;
  data: {
    title: string;
    image: {
      _id: string;
      path: string;
      __v: number;
    };
    _id: string;
    __v: number;
  };
  statusCode: number;
  message: string;
};

export type CreateBrandRequestBody = {
  title: string;
  image?: string;
};

export type UpdateBrandRequestBody = Partial<CreateBrandRequestBody>;

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
  ok: true;
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
  ok: true;
  data: {
    _id: string;
    title: string;
    image: {
      _id: string;
      path: string;
      __v: number;
    };
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
