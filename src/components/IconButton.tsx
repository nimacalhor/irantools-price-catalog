import { Button, ButtonProps } from "@/ui/button.ui";
import React, { ComponentProps, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/utils/chadcn.util";
import Spinner from "./Spinner";

type IconButtonProps = {
  icon: IconProp;
  iconStyles?: string;
  isLoading?: boolean;
} & ButtonProps;

function IconButton(
  {
    icon,
    children,
    iconStyles = "",
    className = "",
    isLoading = false,
    ...buttonProps
  }: IconButtonProps,
  ref?: React.Ref<HTMLButtonElement>
) {
  return (
    <>
      <Button
        ref={ref}
        className={cn("flex justify-center gap-2 items-center", className)}
        {...buttonProps}
      >
        {!isLoading && (
          <>
            <span>{children}</span>
            <FontAwesomeIcon
              icon={icon}
              className={cn("w-4 h-4 ", iconStyles)}
            />
          </>
        )}
        {isLoading && <Spinner />}
      </Button>
    </>
  );
}

export default forwardRef(IconButton);
