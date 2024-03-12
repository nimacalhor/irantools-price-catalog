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

export function objectToParams(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();
   
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const value = params[key];
       

      if (value !== null && value !== undefined) {
        searchParams.append(key, `${value}`);
      }
    }
  }
   
  return searchParams.toString();
}

export function addSubStrToStart(substring: string, stringValue: string): string {
  return stringValue.startsWith(substring) ? stringValue : substring + stringValue;
}
