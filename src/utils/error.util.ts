import { ERROR_MSG_MAP } from "@/constants/error.constants";
import { AllPossibleErrors } from "@/types/api-error.type";
import { ZodError } from "zod";

export function getErrorMessage(err?: AllPossibleErrors) {
  if (!err) return ERROR_MSG_MAP.INTERNAL_ERROR;
  if (!err.errorCode) return ERROR_MSG_MAP.FILE_REQUIRED;

  const { errorCode } = err;
  return ERROR_MSG_MAP[errorCode];
}

export function getZodPersianErrorMessage(zodError: ZodError): string {
  const errorMessages: string[] = [];

  for (const error of zodError.errors) {
    const path = error.path.join('.');
    const customMessage = error.message as string;

    if (customMessage.includes(path)) {
      // If the custom error message contains the path, use it as it is
      errorMessages.push(customMessage);
    } else {
      // Otherwise, construct a user-friendly message based on the default Zod error message
      const defaultErrorMessage = 'خطا در اعتبارسنجی';
      const userFriendlyMessage = `${path} ${defaultErrorMessage}`;

      errorMessages.push(userFriendlyMessage);
    }
  }

  return errorMessages.join(" , ");
}