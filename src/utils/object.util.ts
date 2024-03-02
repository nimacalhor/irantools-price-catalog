export function filterEmptyValues(
  obj: Record<string, any>
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value.trim() !== "")
  );
}
