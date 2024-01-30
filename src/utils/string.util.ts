export function whitespaceTo_(inputString: string): string {
    // Use a regular expression to replace whitespaces with underscores
    return inputString.replace(/\s/g, '_');
  }