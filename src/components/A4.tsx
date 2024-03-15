"use client";
import useWindowSize from "@/hooks/useWindowSize.hook";
import { RootState } from "@/store";
import { actions as createToolActions } from "@/store/createTool.store";
import { actions as toolListActions } from "@/store/toolList.store";
import { AspectRatio } from "@/ui/aspect-ratio.ui";
import { cn } from "@/utils/chadcn.util";
import { areAllValuesNullish } from "@/utils/object.util";
import { usePathname } from "next/navigation";
import { ComponentProps, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToolCard } from "./ToolCard";

function A4({
  className,
  tools,
  readFromState = false,
  toolDetail,
}: {
  className?: string;
  tools?: ComponentProps<typeof ToolCard>["tool"][];
  readFromState?: boolean;
  toolDetail?: ComponentProps<typeof ToolCard>["tool"];
}) {
  // 
  const mainRef = useRef<HTMLDivElement | null>(null);
  const { a4Ref } = useSelector((state: RootState) => state.toolList);
  const createToolState = useSelector((state: RootState) => state.createTool);
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const pathname = usePathname();

  useEffect(() => {
    if (a4Ref?.current?.clientWidth) return;
    if (!mainRef.current) return;

    dispatch(toolListActions.setRef({ ...mainRef }));
  }, [a4Ref, dispatch, width]);

  useEffect(() => {
      dispatch(createToolActions.removeTool());
  }, [pathname, dispatch]);

  (() => {
    if (!readFromState) return;

    if (!toolDetail) return;

    const { size, detail, ...firstLvlData } = createToolState.tool;
    if (!areAllValuesNullish(firstLvlData) || !areAllValuesNullish(detail))
      return;

    dispatch(createToolActions.setTool(toolDetail));
  })();

  return (
    <AspectRatio
      ref={mainRef}
      dir="rtl"
      ratio={1 / 1.414}
      className={cn(
        "border-2 border-foreground/20 p-2 grid grid-rows-12 pb-2 text-right",
        className
      )}
    >
      <div className="row-span-1"></div>
      <div className="row-span-11 grid gap-2 grid-rows-5">
        {readFromState && createToolState.tool && (
          <ToolCard isLocal tool={createToolState.tool as any} />
        )}
        {tools &&
          tools.map((tool, i) => <ToolCard tool={tool} key={i}></ToolCard>)}
      </div>
    </AspectRatio>
  );
}
export default A4;

function getRandomItem<T>(array: T[]): T | undefined {
  if (array.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function getRandomImage() {
  const imageArr = [
    "/assets/015 copy.png",
    "/assets/18 copy.png",
    "/assets/024 copy.png",
    "/assets/027 copy.png",
    "/assets/029 copy.png",
    "/assets/10 copy.png",
  ];
  return getRandomItem<string>(imageArr);
}
