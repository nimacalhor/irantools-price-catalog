export function createArray(length: number): number[] {
  return Array.from({ length }, () => 0);
}

export function isArrayValid(arr: any, checkEmpty: boolean = false): boolean {
  if (!arr) return false;
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

export function removeLastItem(arr: any[]): any[] {
  // Check if the array is not empty
  if (arr.length > 0) {
    // Create a new array without the last item using slice
    const newArray = arr.slice(0, -1);
    return newArray;
  } else {
    // If the array is empty, return an empty array or handle it as needed
    return [];
  }
}

export function fillToNumber(from: number, to: number): number[] {
  if (from > to) {
    throw new Error("ورودی نامعتبر: 'from' باید کمتر یا مساوی 'to' باشد.");
  }

  return Array.from({ length: to - from + 3 }, (_, index) => from + index - 2);
}
