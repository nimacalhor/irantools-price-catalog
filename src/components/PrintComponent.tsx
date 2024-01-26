"use client";
import React, { useRef, useEffect } from "react";
import A4 from "./A4";
import { cn } from "@/utils/chadcn.util";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "@/store/print.store";

type PrintComponentProps = {};

function PrintComponent(_: PrintComponentProps) {
  const { printComponentRef } = useSelector(
    (state: RootState) => state.print
  );
  const dispatch = useDispatch();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (printComponentRef?.current) return;
    if (!mainRef.current) return;
    dispatch(actions.setRef({...mainRef}));
  }, [printComponentRef, dispatch]);

  return (
    <>
      <main
        ref={mainRef}
        className={cn("mx-auto group max-w-screen-xl md:grid md:grid-cols-2 md:gap-5 print:block",)}
      >
        <A4></A4>
      </main>
    </>
  );
}

export default PrintComponent;
