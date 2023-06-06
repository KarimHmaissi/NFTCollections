export const convertToShortForm = (num: number): string => {
  if (num >= 1000) {
    const quotient = num / 1000;
    if (quotient % 1 === 0) {
      return quotient.toFixed(0) + "k";
    }
    return quotient.toFixed(1) + "k";
  }
  return num.toString();
};

export const convertToPercentage = (value: number): string => {
  const sign = value >= 0 ? "+" : "-";
  const percentage = Math.abs(Math.round(value * 100));
  return `${sign}${percentage}%`;
};
