import cloneDeep from "rfdc";

export function deepCopy<T extends {}>(obj: T): T {
  const clonedObject = cloneDeep(obj);
  return clonedObject as unknown as T;
}
