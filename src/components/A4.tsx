"use client";
import { RootState } from "@/store";
import { ToolCard } from "./ToolCard";
import { cn } from "@/utils/chadcn.util";
import { useEffect, useRef } from "react";
import { createArray } from "@/utils/array.util";
import { actions } from "@/store/toolList.store";
import { AspectRatio } from "@/ui/aspect-ratio.ui";
import { useDispatch, useSelector } from "react-redux";
import useWindowSize from "@/hooks/useWindowSize.hook";

function A4({ className }: { className?: string }) {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const { a4Ref } = useSelector((state: RootState) => state.toolList);
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  useEffect(() => {
    if (a4Ref?.current) return; 
    if (!mainRef.current) return;
    dispatch(actions.setRef({ ...mainRef }));
  }, [a4Ref, dispatch, width]);

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
        {createArray(1).map((_, i) => (
          <ToolCard key={i}></ToolCard>
        ))}
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
/*

 font-size: 1.5rem/* 24px */
//  line-height: 2rem/* 32px */;
