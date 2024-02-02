export function whitespaceTo_(inputString: string): string {
  // Use a regular expression to replace whitespaces with underscores
  return inputString.replace(/\s/g, "_");
}

export function uniqueDateStr(): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const currentDate = new Date();
  const dateString = currentDate.toISOString().replace(/[-T:Z.]/g, ""); // Format date as string without special characters

  let result = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return `${dateString}${result}`;
}
