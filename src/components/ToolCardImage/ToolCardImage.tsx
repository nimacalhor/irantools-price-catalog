"use client";
import useTheme from "@/hooks/useTheme.hook";
import { AspectRatio } from "@/ui/aspect-ratio.ui";
import { cn } from "@/utils/chadcn.util";
import { addSubStrToStart } from "@/utils/string.util";
import Image from "next/image";
import { memo } from "react";
import moduleStyles from "./ToolCardImage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

function ToolCardImage({
  image,
  isLocal,
}: {
  image?: string;
  isLocal?: boolean;
}) {
  const [theme] = useTheme();
  const [isBlue, isDBlue, isOrange, isDOrange] = [
    theme === "",
    theme === "dark",
    theme === "orange",
    theme === "orange-dark",
  ];

  // const imagePath = !image
  // ? ""
  // : image.startsWith("data:")
  // ? image
  // : addSubStrToStart(process.env.NEXT_PUBLIC_API_URL + "/", image || "");
  let imagePath;
  if (!image) {
    imagePath = "";
  } else if (image.startsWith("data:")) {
    imagePath = image;
  } else {
    imagePath = addSubStrToStart(
      process.env.NEXT_PUBLIC_API_URL + "/",
      image || ""
    );
  }

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
          {image && imagePath && (
            <Image
              src={imagePath}
              alt="tool"
              fill
              className="object-contain z-20"
              quality={100}
            />
          )}        
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
