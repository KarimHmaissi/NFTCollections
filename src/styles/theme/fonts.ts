import localFont from "next/font/local";

export const Moderat = localFont({
  src: [
    {
      path: "../../../public/fonts/Moderat-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Moderat-Bold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Moderat-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
