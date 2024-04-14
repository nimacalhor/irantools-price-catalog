"use client";
import { RootState } from "@/store";
import { cn } from "@/utils/chadcn.util";
import { ComponentProps, RefObject, useMemo } from "react";
import { useSelector } from "react-redux";
import { ToolCardDescription } from "./ToolCardDescription";
import { ToolCardHeader } from "./ToolCardHeader";
import ToolCardImage from "./ToolCardImage/ToolCardImage";
import { ToolCardOptionalInfo } from "./ToolCardOptionalInfo";
import ToolCardTooltip from "./ToolCardTooltip";

const sizeClasses: { [key: number]: string } = {
  "1": "row-span-1",
  "2": "row-span-2",
  "3": "row-span-3",
  "4": "row-span-4",
  "5": "row-span-5",
};

export function ToolCard({
  tool,
  isLocal = false,
}: {
  tool: {
    name?: ComponentProps<typeof ToolCardHeader>["name"];
    code?: ComponentProps<typeof ToolCardHeader>["code"];
    price?: ComponentProps<typeof ToolCardHeader>["price"];
    description?: string;
    detail?: ComponentProps<typeof ToolCardOptionalInfo>["detail"];
    size: number;
    image?: ComponentProps<typeof ToolCardImage>["image"];
    id?: string;
  };
  isLocal?: ComponentProps<typeof ToolCardImage>["isLocal"];
}) {
  //  temp log
  console.log("__________ size in ToolCard", { size: tool.size });
  const { a4Ref } = useSelector((state: RootState) => state.toolList);
  const width = (a4Ref as RefObject<HTMLDivElement>)?.current?.clientWidth;

  const a4w = useMemo(() => {
    return width;
  }, [width]);

  const {
    code,
    name,
    price,
    description: _description,
    detail,
    size = 1,
    image,
    id,
  } = tool;

  let description: any | undefined = undefined;

  if (_description) {
    if (typeof _description === "string") {
      try {
        const parsedDescription = JSON.parse(_description);
        description = parsedDescription;
      } catch (error) {}
    } else description = _description;
  }

  //  temp log
  console.log("__________ size in ToolCard", { size });

  return (
    <ToolCardTooltip
      className={sizeClasses[size]}
      toolId={id}
      isLocal={isLocal}
    >
      <div
        className={cn(
          "border border-border grid grid-cols-12 w-full h-full rounded-md overflow-hidden text-foreground",
          isLocal
            ? ""
            : `hover:cursor-pointer hover:border-primary transition-all duration-300`
        )}
      >
        <div className="col-span-9 flex flex-col justify-start gap-2">
          <ToolCardHeader
            isLocale={isLocal}
            name={name}
            code={code}
            price={price}
            parentW={a4w}
          ></ToolCardHeader>
          <div className="row-span-3 gap-2 grid grid-cols-12">
            <ToolCardDescription
              parentW={a4w}
              description={description}
            ></ToolCardDescription>
            <ToolCardOptionalInfo
              detail={detail}
              parentW={a4w}
            ></ToolCardOptionalInfo>
          </div>
        </div>
        <ToolCardImage isLocal={isLocal} image={image}></ToolCardImage>
      </div>
    </ToolCardTooltip>
  );
}
