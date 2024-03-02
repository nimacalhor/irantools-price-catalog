"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog.ui";
import React, { ComponentProps, useState } from "react";
import FilterForm from "./FilterForm";

type FilterDialogProps = {
  children: React.ReactNode;
  formProps?: ComponentProps<typeof FilterForm>;
};

function FilterDialog({ children, formProps }: FilterDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dialog onOpenChange={onOpenChange} open={isOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-w-screen-md">
          <DialogHeader>
            <DialogTitle>اعمال فیلتر جستجو</DialogTitle>
            <DialogDescription>
              نمایش لیست محصولات نسبت به فیلتر های اعمال شده
            </DialogDescription>
          </DialogHeader>
          <div>
            {formProps && (
              <FilterForm {...formProps} onSubmit={() => onOpenChange(false)} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );

  function onOpenChange(state: boolean) {
    setIsOpen(state);
  }
}

export default FilterDialog;
