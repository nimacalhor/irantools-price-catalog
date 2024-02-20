import { ERROR_MSG_MAP } from "@/constants/error.constants";
import { AllPossibleErrors } from "@/types/api-error.type";

export function getErrorMessage(err?: AllPossibleErrors) {
  if (!err) return ERROR_MSG_MAP.INTERNAL_ERROR;
  if (!err.errorCode) return ERROR_MSG_MAP.FILE_REQUIRED;

  const { errorCode } = err;
  return ERROR_MSG_MAP[errorCode];
}
