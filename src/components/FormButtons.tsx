"use client";
import { RootState } from "@/store";
import { CreateToolStore, actions } from "@/store/createTool.store";
import { Button } from "@/ui/button.ui";
import {
  faAdd,
  faEye,
  faFloppyDisk,
  faMinus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "./IconButton";
import { FormType } from "./ToolForm";
import USureDialog from "@/components/USureDialog";
import { useTransition } from "react";
import Spinner from "./Spinner";
import { deleteToolAction } from "@/actions/tools.action";
import { useToast } from "@/hooks/useToast.hook";
import { useRouter } from "next/navigation";

export function FormButtons({
  isEdit = false,
  onPreviewClick
}: {
  isEdit?: boolean;
  onPreviewClick?: (params: any) => void
}) {
  const dispatch = useDispatch();
  const { size, image, id } = useSelector(
    (state: RootState) => state.createTool.tool
  );

  const { toast } = useToast();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const addButtonDisable = size === 5;
  const minusButtonDisable = size === 1;

  const isValid = true;

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-end md:gap-2">
      {isEdit && (
        <USureDialog
          onYes={deleteHandler}
          text={"آیا از حذف محصول مطمین هستید ؟"}
        >
          <IconButton
            size={"lg"}
            variant={"destructive"}
            type="button"
            icon={faTrash}
            isLoading={isPending}
            className="justify-self-start"
          >
            <span>حذف محصول</span>
          </IconButton>
        </USureDialog>
      )}
      <IconButton
        size={"lg"}
        icon={faEye}
        type="button"
        variant={"secondary"}
        onClick={onPreviewClick}
      >
        اعمال تغییرات
      </IconButton>
      <div className="bg-muted p-1 rounded-md gap-5 flex justify-center items-center">
        <Button
          onClick={minusHandler}
          disabled={minusButtonDisable}
          type="button"
          variant={"secondary"}
          size={"icon"}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <span className="text-secondary-foreground">{size}</span>
        <Button
          onClick={addHandler}
          disabled={addButtonDisable}
          type="button"
          variant={"secondary"}
          size={"icon"}
        >
          <FontAwesomeIcon icon={faAdd} />
        </Button>
      </div>
      <IconButton
        disabled={!isValid || !image}
        icon={faFloppyDisk}
        size={"lg"}
        type="submit"
      >
        ذخیره
      </IconButton>
    </div>
  );


  function addHandler() {
    dispatch(actions.setSize((size || 1) + 1));
  }

  function minusHandler() {
    dispatch(actions.setSize((size || 2) - 1));
  }

  function deleteHandler() {
    if (!id)
      return toast({
        title: `حذف محصول با موفقیت انجام نشد !`,
        variant: "destructive",
      });
    startTransition(async () => {
      const deleteResponse = await deleteToolAction(id);
      if (deleteResponse.ok) {
        toast({
          title: `محصول با موفقیت حذف شد`,
        });
        router.replace("/");
      } else {
        toast({
          title: `ابزار با موفقیت حذف نشد`,
          description: deleteResponse.message,
          variant: "destructive",
        });
      }
    });
  }
}
