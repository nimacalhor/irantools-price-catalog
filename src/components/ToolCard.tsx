import roboto from "@/font/roboto";
import { cn } from "@/utils/chadcn.util";
import Image from "next/image";
import { getRandomImage } from "./A4";

export function ToolCard() {
  const isOrange: boolean = false;
  return (
    <div className="border border-border grid grid-cols-12 w-full h-full rounded-md overflow-hidden">
      <div className="col-span-8 grid grid-rows-4">
        <div
          className={cn(
            "row-span-1 flex items-center justify-between px-2",
            isOrange
              ? "bg-gradient-to-l from-primary-orange to-primary-orange/60 text-primary-orange-foreground"
              : "bg-gradient-to-l from-primary to-primary/60 text-primary-foreground"
          )}
        >
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
            {/* <span
              className={cn(
                "text-[2.3vw] sm:text-sm md:text-[1.25vw] lg:text-sm xl:text-base print:text-lg tracking-tight"
              )}
            >
              ت 170000
            </span> */}
          </div>
        </div>
        <div className="row-span-3"></div>
      </div>
      <div className="col-span-4 relative ">
        <div className="absolute border-r-border border-r rounded-tr-none rounded-md -top-0 -bottom-0 -right-0 -left-0">
          <Image
            src={getRandomImage() || ""}
            alt="tool"
            fill
            className="object-contain"
            quality={100}
          />
        </div>
        <div
          className={cn(
            "absolute top-0 bottom-0 right-0 left-0 rounded-tr-none rounded-md",
            isOrange ? "bg-gradient-to-tl from-primary-orange/10 via-transparent" : "bg-gradient-to-tl from-primary/10 via-transparent"
          )}
        ></div>
      </div>
    </div>
  );
}
