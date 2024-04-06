"use client";
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
  //  temp log
  console.log("__________ className in ToolCardTooltip", { className });
  if (isLocal) return <div className={cn("", className)}>{children}</div>;
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <Link className={cn("", className)} href={`/edit/${toolId}`}>
          <TooltipTrigger>{children}</TooltipTrigger>
        </Link>
        <TooltipContent>ویرایش محصول</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ToolCardTooltip;
