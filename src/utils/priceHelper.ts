import { formatEther } from "ethers";

export const formatEtherValue = (value: string, multiplier: number = 1) => {
  const ethValue = formatEther(value);
  const result = parseFloat(ethValue) * multiplier;
  return result.toFixed(2);
};
