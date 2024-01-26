import { Button, ButtonProps } from "@/ui/button.ui";
import React, { ComponentProps, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/utils/chadcn.util";

type IconButtonProps = { icon: IconProp; iconStyles?: string } & ButtonProps;

function IconButton({
  icon,
  children,
  iconStyles = "",
  className = "",
  ...buttonProps
}: IconButtonProps, ref?: React.Ref<HTMLButtonElement>) {
  return (
    <>
      <Button ref={ref} className={cn("flex justify-center gap-2 items-center", className)} {...buttonProps}>
        <span>{children}</span>
        <FontAwesomeIcon icon={icon} className={cn("w-4 h-4 ", iconStyles)} />
      </Button>
    </>
  );
}

export default forwardRef(IconButton);
