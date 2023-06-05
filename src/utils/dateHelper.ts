export function formatDate(input: string): string {
  const date = new Date(input);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
