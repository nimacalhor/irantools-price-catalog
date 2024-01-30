import { AspectRatio } from "@/ui/aspect-ratio.ui";
import { createArray } from "@/utils/array.util";
import { cn } from "@/utils/chadcn.util";
import { ToolCard } from "./ToolCard";

function A4({ className }: { className?: string }) {
  return (
    <AspectRatio
      dir="rtl"
      ratio={1 / 1.414}
      className={cn(
        "border-2 border-foreground/20 p-2 grid grid-rows-12 pb-2 text-right",
        className
      )}
    >
      <div className="row-span-1"></div>
      <div className="row-span-11 grid gap-2 grid-rows-5">
        {createArray(5).map((_, i) => (
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
