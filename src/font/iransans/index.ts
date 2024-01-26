import localFont from "next/font/local";

const iransans = localFont({
  variable: "--font-iransans",
  src: [
    {
      path: "./iransans-medium.woff2",
      weight: "400",
      style: "",
    },
    {
      path: "./iransans-light.woff2",
      weight: "300",
      style: "",
    },
    {
      path: "./iransans-ultraLight.woff2",
      weight: "200",
      style: "",
    },
    {
      path: "./iransans-bold.woff2",
      weight: "500",
      style: "",
    },
    {
      path: "./iransans-black.woff2",
      weight: "600",
      style: "",
    },
  ],
});

export default iransans;
