import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog.ui";
import { Button } from "@/ui/button.ui";
import TextEditor from "./TextEditor";

type FilterDialogProps = { children: React.ReactNode };

function FilterDialog({ children }: FilterDialogProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>اعمال فیلتر جستجو</DialogTitle>
            <DialogDescription>
              نمایش لیست محصولات نسبت به فیلتر های اعمال شده
            </DialogDescription>
          </DialogHeader>
          <div></div>
          <DialogFooter>
            <Button type="submit">ثبت</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default FilterDialog;
