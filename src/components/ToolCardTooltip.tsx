import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui/tooltip.ui";
import Link from "next/link";
import { cn } from "@/utils/chadcn.util";

type ToolCardTooltipProps = {
  children: React.ReactNode;
  isLocal: boolean;
  toolId?: string;
  className?: string;
};

function ToolCardTooltip({
  children,
  isLocal,
  toolId,
  className,
}: ToolCardTooltipProps) {
  if (isLocal) return children;
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <Link className={cn("", className)} passHref href={`/edit/${toolId}`}>
          <TooltipTrigger>{children}</TooltipTrigger>
        </Link>
        <TooltipContent>ویرایش محصول</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ToolCardTooltip;
