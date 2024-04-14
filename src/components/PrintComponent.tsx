"use client";
import React, { useRef, useEffect, ComponentProps } from "react";
import A4 from "./A4";
import { cn } from "@/utils/chadcn.util";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "@/store/print.store";
import { isArrayValid } from "@/utils/array.util";
import { Button } from "@/ui/button.ui";
import Link from "next/link";

type PrintComponentProps = {
  groupedTools?: ComponentProps<typeof A4>["tools"][];
};

function PrintComponent({ groupedTools }: PrintComponentProps) {
  const { printComponentRef } = useSelector((state: RootState) => state.print);
  const dispatch = useDispatch();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (printComponentRef?.current) return;
    if (!mainRef.current) return;
    dispatch(actions.setRef({ ...mainRef }));
  }, [printComponentRef, dispatch]);

  if (!groupedTools || !isArrayValid(groupedTools, true))
    return (
      <div className="mx-auto max-w-screen-xl flex flex-col justify-center items-center h-[60vh] gap-3">
        <h2 className="text-3xl">هیچ ابزاری یافت نشد 😟</h2>
        <Link passHref href={"/create"}>
          <Button variant={"link"}>ثبت ابزار جدید</Button>
        </Link>
      </div>
    );

  return (
    <>
      <main
        ref={mainRef}
        className={cn(
          "mx-auto group max-w-screen-xl xl:grid xl:grid-cols-2 xl:gap-5 print:block"
        )}
      >
        {groupedTools.map((tools, i) => (
          <A4 key={i} tools={tools}></A4>
        ))}
      </main>
    </>
  );
}

export default PrintComponent;
