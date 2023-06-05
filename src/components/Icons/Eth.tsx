import { SvgIcon } from "@mui/material";
import styles from "./Icons.module.css";

export const Eth = ({ className = styles.root }: { className?: string }) => (
  <SvgIcon className={className} width="1rem" height="1rem" viewBox="0 0 16 16">
    <path
      d="M12.3294 8.09235L7.96544 1L3.67055 8.09708L7.9988 10.6785L12.3294 8.09235Z"
      fill="currentColor"
    />
    <path
      d="M12.3294 8.95863L7.98927 11.4857L3.67055 8.95863L7.9988 15L12.3294 8.95863Z"
      fill="currentColor"
    />
  </SvgIcon>
);
