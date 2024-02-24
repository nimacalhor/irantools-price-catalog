"use client";
import { RootState } from "@/store";
import { CreateToolStore, actions } from "@/store/createTool.store";
import { Button } from "@/ui/button.ui";
import {
  faAdd,
  faEye,
  faFloppyDisk,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "./IconButton";
import { FormType } from "./ToolForm";
import { deepCopy } from "@/utils/object.util";

export function FormButtons({ form }: { form: FormType }) {
  const dispatch = useDispatch();
  const { size, image } = useSelector(
    (state: RootState) => state.createTool.tool
  );

  const addButtonDisable = size === 5;
  const minusButtonDisable = size === 1;

  const isValid = form.formState.isValid && !form.formState.isValidating;

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-end md:gap-2">
      <IconButton
        size={"lg"}
        icon={faEye}
        type="button"
        variant={"secondary"}
        onClick={previewClickHandler}
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

  function previewClickHandler() {
    // form.trigger();
    const { name, brand, category, code, detail, price } = { ...form.watch() };
    const toolState: CreateToolStore["tool"] = {
      name,
      code,
      brand,
      price,
      detail,
      category,
      available: !!price,
      image: image || undefined,
      size,
    };
    console.log({ detail });

    dispatch(actions.setTool(toolState));

  }

  function addHandler() {
    dispatch(actions.setSize((size || 1) + 1));
  }

  function minusHandler() {
    dispatch(actions.setSize((size || 2) - 1));
  }
}
