type InvalidParamsErrorResponse = {
  data: {
    paths: Array<string>;
  };
  errorCode: 4004;
  statusCode: number;
  errorMessage: string;
  ok: false;
};

type DuplicateKeyErrorResponse = {
  data: {
    keyValues: Array<string>;
  };
  errorCode: 4003;
  errorMessage: string;
  ok: false;
  statusCode: number;
};

type CastErrorResponse = {
  ok: false;
  data: {
    stringValue: string;
    valueType: string;
    kind: string;
    value: string;
    path: string;
    reason: {};
    name: string;
    message: string;
  };
  errorCode: 4002;
  errorMessage: string;
  statusCode: number;
};

type InvalidBodyErrorResponse = {
  data: {
    paths: Array<string>;
  };
  errorCode: 4004;
  statusCode: number;
  errorMessage: string;
  ok: false;
};

type DocNotFoundErrorResponse = {
  data: {
    modelName: string;
    id: string;
  };
  errorCode: 4041;
  errorMessage: string;
  ok: false;
  statusCode: number;
};

type SimpleBadRequestErrorResponse = {
  message: string;
  error: string;
  statusCode: number;
  ok?: false;
  errorCode?: undefined
};

export type ListErrorResponse = InvalidParamsErrorResponse;

export type FileRequiredErrorResponse = SimpleBadRequestErrorResponse;

export type CUErrorResponse =
  | DuplicateKeyErrorResponse
  | CastErrorResponse
  | InvalidBodyErrorResponse
  | DocNotFoundErrorResponse;

export type DetailErrorResponse = DocNotFoundErrorResponse | CastErrorResponse;

export type AllPossibleErrors =
  | InvalidParamsErrorResponse
  | DuplicateKeyErrorResponse
  | CastErrorResponse
  | InvalidBodyErrorResponse
  | DocNotFoundErrorResponse
  | SimpleBadRequestErrorResponse;
