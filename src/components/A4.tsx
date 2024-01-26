import roboto from "@/font/roboto";
import { AspectRatio } from "@/ui/aspect-ratio.ui";
import { createArray } from "@/utils/array.util";
import { cn } from "@/utils/chadcn.util";
import Image from "next/image";

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
          <div key={i} className="border  grid grid-cols-12 w-full h-full rounded-md overflow-hidden">
            <div className="col-span-8 grid grid-rows-4">
              <div className="row-span-1 flex items-center justify-between px-2 bg-gradient-to-bl from-primary-orange/40 to-background ">
                <h3
                  className={cn(
                    "text-[2.75vw] sm:text-base md:text-xs lg:text-base xl:text-xl print:text-2xl"
                  )}
                >
                  قیچی باغبانی فلان بلان
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-[2.3vw] sm:text-sm md:text-[1.25vw] lg:text-sm xl:text-base print:text-lg tracking-tight",
                      roboto.className
                    )}
                  >
                    ID2022
                  </span>
                  <span
                    className={cn(
                      "text-[2.3vw] sm:text-sm md:text-[1.25vw] lg:text-sm xl:text-base print:text-lg tracking-tight"
                    )}
                  >
                    ت 170000
                  </span>
                </div>
              </div>
              <div className="row-span-3"></div>
            </div>
            <div className="col-span-4 relative">
              <div className="absolute border border-border rounded-r-none rounded-sm -top-0 -bottom-0 -right-0 -left-0">
                <Image
                  src={getRandomImage() || ""}
                  alt="tool"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          </div>
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

function getRandomImage() {
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
