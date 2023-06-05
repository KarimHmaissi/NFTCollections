export function formatDate(input: string): string {
  const date = new Date(input);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  let formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  let day = +formattedDate.split(" ")[1];

  let suffix = "";

  switch (day % 10) {
    case 1:
      suffix = day != 11 ? "st" : "th";
      break;
    case 2:
      suffix = day != 12 ? "nd" : "th";
      break;
    case 3:
      suffix = day != 13 ? "rd" : "th";
      break;
    default:
      suffix = "th";
  }

  return formattedDate + suffix;
}
