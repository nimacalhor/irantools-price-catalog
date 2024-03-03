export function filterEmptyValues(
  obj: Record<string, any>
): Record<string, any> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => {
      return value !== null && value !== undefined && value !== "";
    })
  );
}
