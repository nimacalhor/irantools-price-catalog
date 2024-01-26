"use client";
import React from "react";
import { Button } from "@/ui/button.ui";
import { Separator } from "@/ui/separator.ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/chadcn.util";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col sm:flex-row justify-center border border-border rounded-sm items-center">
      <Link passHref href={"/"}>
        <Button
          variant={"ghost"}
          className={cn(
            "rounded-none font-normal text-secondary-foreground",
            isActive("/") ? "bg-secondary text-foreground" : ""
          )}
        >
          لیست محصولات
        </Button>
      </Link>
      <Separator orientation="vertical" className="h-5 hidden sm:inline-block" />
      <Link passHref href={"/create"}>
        <Button
          variant={"ghost"}
          className={cn(
            "rounded-none font-normal text-secondary-foreground",
            isActive("/create") ? "bg-secondary text-foreground" : ""
          )}
        >
          افزودن محصول
        </Button>
      </Link>
      <Separator orientation="vertical" className="h-5 hidden sm:inline-block" />
      <Link passHref href={"/setting"}>
        <Button
          variant={"ghost"}
          className={cn(
            "rounded-none font-normal text-secondary-foreground",
            isActive("/setting") ? "bg-secondary text-foreground" : ""
          )}
        >
          تنظیمات
        </Button>
      </Link>
    </nav>
  );
  function isActive(href: string) {
    if (href === pathname) return true;
  }
}
