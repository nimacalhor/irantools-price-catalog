export function groupItemsBySize<T extends Record<any, any>>(
  input: T[]
): T[][] {
  const groups: T[][] = [];
  let currentGroup: T[] = [];
  let currentGroupSize = 0;

  for (const item of input) {
    if (currentGroupSize + item.size <= 5) {
      // Add the item to the current group
      currentGroup.push(item);
      currentGroupSize += item.size;
    } else {
      // Start a new group
      groups.push(currentGroup);
      currentGroup = [item];
      currentGroupSize = item.size;
    }
  }

  // Add the last group if not empty
  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  return groups;
}
