"use client";

import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import * as NProgress from "nprogress";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type TopLoaderProps = {};
const lightPrimary = "hsl(190, 98.9%, 36.9%)";
const orangePrimary = "hsl(17, 100%, 49.6%)";

/**
React component for a top loader that adjusts its color based on the theme (light or dark) using the next-themes package.
@param {TopLoaderProps} props - The props for the TopLoader component
@returns {JSX.Element} - The TopLoader component */
function TopLoader({}: TopLoaderProps) {
  const { theme } = useTheme();
  const color = theme === "orange" ? orangePrimary : lightPrimary;
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    NProgress.done();
  }, [pathname, router]);

  return (
    <>
      <NextTopLoader color={color} />
    </>
  );
}

export default TopLoader;
