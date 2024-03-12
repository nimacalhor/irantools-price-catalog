import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui/tooltip.ui";
import Link from "next/link";

type ToolCardTooltipProps = {
  children: React.ReactNode;
  isLocal: boolean;
  toolId?: string;
};

function ToolCardTooltip({ children, isLocal, toolId }: ToolCardTooltipProps) {
  if (isLocal) return children;
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <Link href={`/edit/${toolId}`}>
          <TooltipTrigger>{children}</TooltipTrigger>
        </Link>
        <TooltipContent>ویرایش محصول</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ToolCardTooltip;
