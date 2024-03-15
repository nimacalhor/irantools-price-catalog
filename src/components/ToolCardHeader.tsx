import roboto from "@/font/roboto";
import { cn } from "@/utils/chadcn.util";
import { getFSStyle } from "@/utils/style.util";

export function ToolCardHeader({
  parentW,
  code,
  name,
  price,
}: {
  parentW?: number;
  name?: string;
  code?: string;
  price?: string;
}) {
   
  if (!parentW) return null;
  const h3FS = parentW / 35 + "px";
  const idFS = parentW / 40 + "px";
  const priceFS = parentW / 30 + "px";

  return (
    <div className={cn("row-span-1 flex items-center justify-between px-2")}>
      <h3 style={getFSStyle(h3FS)} className={cn("print:text-2xl")}>
        {name}
      </h3>
      <div className="flex items-center gap-2">
        <span
          style={getFSStyle(idFS)}
          className={cn("print:text-lg tracking-tight", roboto.className)}
        >
          {code}
        </span>
        {price && (
          <span
            style={getFSStyle(priceFS)}
            className={cn(
              "lg:text-base xl:text-lg print:text-xl tracking-tighter font-bold text-primary"
            )}
          >
            {price} ت
          </span>
        )}
      </div>
    </div>
  );
}
