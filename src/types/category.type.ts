export type CreateCategoryResponse = {
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

export type CategoryListResponse = {
  ok: boolean;
  data: Array<{
    _id: string;
    title: string;
    image: any;
    __v: number;
  }>;
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

export type CategoryUpdateResponse = {
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
