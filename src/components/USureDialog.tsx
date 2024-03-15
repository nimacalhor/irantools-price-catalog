"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/ui/dialog.ui";

import React, { useState } from "react";
import IconButton from "./IconButton";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

type USureDialogProps = {
  children: React.ReactNode;
  onYes?: () => void;
  text: string;
};

function USureDialog({ children, onYes, text }: USureDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dialog onOpenChange={(open) => setIsOpen(open)} open={isOpen}>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{text}</DialogTitle>
          </DialogHeader>
          <div className="flex justify-start items-center gap-2 mt-5">
            <IconButton onClick={yesClickHandler} icon={faCheck}>
              بله
            </IconButton>
            <DialogClose>
              <IconButton variant={"secondary"} icon={faXmark}>
                خیر
              </IconButton>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );

  function yesClickHandler() {
    if (onYes) onYes();
    setIsOpen(false);
  }
}

export default USureDialog;
