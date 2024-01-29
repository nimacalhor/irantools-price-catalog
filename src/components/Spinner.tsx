import { cn } from "@/utils/chadcn.util";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ComponentProps } from "react";

type SpinnerProps = {} & Omit<ComponentProps<typeof FontAwesomeIcon>, "icon">;

function Spinner({ className, ...fAProps }: SpinnerProps) {
  return (
    <>
      <FontAwesomeIcon
        className={cn("w-6 h-6 text-inherit animate-spin", className)}
        {...fAProps}
        icon={faSpinner}
      />
    </>
  );
}

export default Spinner;
