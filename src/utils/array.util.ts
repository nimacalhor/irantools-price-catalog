export function createArray(length: number): number[] {
  return Array.from({ length }, () => 0);
}

export function isArrayValid(arr: any, checkEmpty: boolean = false): boolean {
  if(!arr) return false
  // Check if it's an array
  if (!Array.isArray(arr)) {
      return false;
  }

  // Check if the array is empty if checkEmpty is true
  if (checkEmpty && arr.length === 0) {
      return false;
  }

  // Additional criteria can be added here if needed

  // If all checks pass, the array is considered valid
  return true;
}