export function filterEmptyValues(
  obj: Record<string, any>
): Record<string, any> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => {
      return value !== null && value !== undefined && value !== "";
    })
  );
}

export function areAllValuesNullish(obj?: Record<string, any>): boolean {
  if (!obj) return true;
  if (isObjectEmpty(obj)) return true;
  for (const value of Object.values(obj)) {
    if (value !== null && value !== undefined) {
      return false;
    }
  }
  return true;
}

export function isObjectEmpty(obj: Record<any, any>) {
  return Object.keys(obj).length === 0;
}
