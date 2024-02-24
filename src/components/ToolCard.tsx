"use client";
import { RootState } from "@/store";
import { ComponentProps, RefObject, useMemo } from "react";
import { useSelector } from "react-redux";
import { ToolCardDescription } from "./ToolCardDescription";
import { ToolCardHeader } from "./ToolCardHeader";
import ToolCardImage from "./ToolCardImage/ToolCardImage";
import { ToolCardOptionalInfo } from "./ToolCardOptionalInfo";
import { cn } from "@/utils/chadcn.util";

const sizeClasses: { [key: number]: string } = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
  5: "row-span-5",
};

export function ToolCard({
  tool,
  isLocal,
}: {
  tool: {
    name?: ComponentProps<typeof ToolCardHeader>["name"];
    code?: ComponentProps<typeof ToolCardHeader>["code"];
    price?: ComponentProps<typeof ToolCardHeader>["price"];
    description?: string;
    detail?: ComponentProps<typeof ToolCardOptionalInfo>["detail"];
    size: number;
    image?: ComponentProps<typeof ToolCardImage>["image"];
  };
  isLocal?: ComponentProps<typeof ToolCardImage>["isLocal"];
}) {
   
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
  } = tool;

  let description: any | undefined = undefined;

  if (_description) {
    console.log({ _description });
     
    if (typeof _description === "string") {
      try {
        const parsedDescription = JSON.parse(_description);
        description = parsedDescription;
        console.log({ parsedDescription });
      } catch (error) {}
    } else description = _description;
  }

   

  return (
    <div
      className={cn(
        "border border-border grid grid-cols-12 w-full h-full rounded-md overflow-hidden text-foreground",
        sizeClasses[size]
      )}
    >
      <div className="col-span-9 flex flex-col justify-start gap-2">
        <ToolCardHeader
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
  );
}
