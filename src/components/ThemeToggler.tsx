"use client";

import * as React from "react";
import { MoonIcon, SunIcon, Half2Icon } from "@radix-ui/react-icons";

import { Button } from "@/ui/button.ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu.ui";
import useTheme from "@/hooks/useTheme.hook";

function ThemeToggler() {
  const [_, setTheme] = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Half2Icon className="text-primary" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setTheme("")}>آبی</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          تاریک آبی
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("orange")}>
          نرنجی
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("orange-dark")}>
          تاریک نارنجی
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggler;
