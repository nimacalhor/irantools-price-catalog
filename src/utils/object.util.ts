import cloneDeep from "rfdc";

export function deepCopy<T extends {}>(obj: T): T {
  const clonedObject = cloneDeep(obj);
  return clonedObject as unknown as T;
}

export function filterEmptyValues(
  obj: Record<string, any>
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value.trim() !== "")
  );
}
