
export type UploadImageResponse = {
  ok: true;
  data: {
    path: string;
    _id: string;
    __v: number;
  };
  statusCode: number;
  message: string;
};

export type UploadImageRequestBody = FormData;
