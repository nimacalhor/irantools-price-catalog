"use client";
import { cn } from "@/utils/chadcn.util";
import Image from "next/image";
import { getRandomImage } from "../A4";
import { memo } from "react";
import { AspectRatio } from "@/ui/aspect-ratio.ui";
import moduleStyles from "./ToolCardImage.module.css";
import useTheme from "@/hooks/useTheme.hook";

function ToolCardImage(props: {}) {
  const [theme] = useTheme();
  const [isBlue, isDBlue, isOrange, isDOrange] = [
    theme === "",
    theme === "dark",
    theme === "orange",
    theme === "orange-dark",
  ];
  return (
    <div className="col-span-3 relative ">
      <div
        className={cn(
          "absolute border-r-border border-r rounded-tr-none rounded-md -top-0 -bottom-0 -right-0 -left-0",
          isBlue ? moduleStyles["bgShape--blue"] : "",
          isDBlue ? moduleStyles["bgShape--blue--dark"] : "",
          isOrange ? moduleStyles["bgShape--orange"] : "",
          isDOrange ? moduleStyles["bgShape--orange--dark"] : ""
        )}
      >
        <AspectRatio className="w-full">
          <Image
            src={getRandomImage() || ""}
            alt="tool"
            fill
            className="object-contain z-20"
            quality={100}
          />
        </AspectRatio>
      </div>
      <div
        className={cn(
          "absolute top-0 bottom-0 right-0 left-0 rounded-tr-none rounded-md ",
          isBlue ? "bg-gradient-to-b from-background/80" : "",
          isDBlue ? "bg-gradient-to-b from-foreground/60" : "",
          isOrange ? "bg-gradient-to-b from-background/80" : "",
          isDOrange ? "bg-gradient-to-b from-foreground/60" : ""
        )}
      ></div>
    </div>
  );
}

export default memo(ToolCardImage);
