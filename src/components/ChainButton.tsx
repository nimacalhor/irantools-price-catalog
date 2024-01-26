import { Button, ButtonProps, buttonVariants } from "@/ui/button.ui";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type ChainButtonProps = {
  icon?: IconProp;
  text?: string;
  onClick: ButtonProps["onClick"];
  disabled?: ButtonProps["disabled"];
  isActive?: boolean;
  isDelete?: boolean;
};

function ChainButton({
  disabled,
  icon,
  isActive,
  onClick,
  text,
  isDelete,
}: ChainButtonProps) {
  return (
    <>
      <Button
        size={"icon"}
        variant={isDelete ? "destructive" : "secondary"}
        onClick={onClick}
        disabled={disabled}
        className={
          isActive
            ? buttonVariants({ variant: "secondary", size: "icon" }) +
              " border-primary border"
            : ""
        }
      >
        {icon && <FontAwesomeIcon icon={icon} />}
        {text && <p>{text}</p>}
      </Button>
    </>
  );
}

export default ChainButton;
