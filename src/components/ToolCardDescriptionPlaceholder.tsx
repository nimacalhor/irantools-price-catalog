"use client";
import { Skeleton } from "@/ui/skeleton.ui";
import React from "react";

export function ToolCardDescriptionPlaceholder({ parentW }: { parentW: number; }) {
  const gapSize = parentW / 90 + "px";
  const headerHeight = parentW / 30 + "px";
  const pHeight = parentW / 60 + "px";
  return (
    <div
      style={{
        gap: gapSize,
      }}
      className="col-span-9 grid grid-cols-12"
    >
      <Skeleton
        style={{
          height: headerHeight,
        }}
        className="animate-none col-span-7 bg-foreground/20 !rounded-sm" />
      <Skeleton
        style={{
          height: pHeight,
        }}
        className="animate-none col-span-10 bg-foreground/20 !rounded-sm" />
      <Skeleton
        style={{
          height: pHeight,
        }}
        className="animate-none col-span-11 bg-foreground/20 !rounded-sm" />
      <Skeleton
        style={{
          height: pHeight,
        }}
        className="animate-none col-span-11 bg-foreground/20 !rounded-sm" />
      <Skeleton
        style={{
          height: pHeight,
        }}
        className="animate-none col-span-5 bg-foreground/20 !rounded-sm" />
      <Skeleton
        style={{
          height: pHeight,
        }}
        className="animate-none col-span-5 bg-foreground/20 !rounded-sm" />
      <Skeleton
        style={{
          height: pHeight,
        }}
        className="animate-none col-span-5 bg-foreground/20 !rounded-sm" />
    </div>
  );
}
