"use client";
import IconButton from "@/components/IconButton";
import { useToast } from "@/hooks/useToast.hook";
import { Brand, Category } from "@/types/setting.type";
import { Card, CardContent, CardFooter } from "@/ui/card.ui";
import { Input } from "@/ui/input.ui";
import { uniqueDateStr, whitespaceTo_ } from "@/utils/string.util";
import {
  faFloppyDisk,
  faImage,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import SettingCardImageDropdown from "./SettingCardImageDropdown";
import { deleteBrand } from "@/api/brand.api";
import { deleteCategory } from "@/api/category.api";
import {
  createBrandAction,
  deleteBrandAction,
  updateBrandAction,
} from "@/actions/brands.action";
import {
  createCategoryAction,
  deleteCategoryAction,
  updateCategoryAction,
} from "@/actions/categories.action";

let isDeleting: boolean = false;

type SettingCardProps = {
  dataTitle?: string;
  dataImage?: string;
  id?: string;
  isNew?: boolean;
  cardType?: "برند" | "دسته بندی";
  onSave?: () => void;
};
export function SettingCard({
  cardType = "برند",
  onSave,
  id,
  dataImage,
  dataTitle,
  isNew = false,
}: SettingCardProps) {
  // INFO : check props
  debugger;
  //
  const isFromDB = !!id;

  const defaultImage = dataImage
    ? process.env.NEXT_PUBLIC_API_URL + `/${dataImage}`
    : undefined;

  const [[imageSrc, imageFile], setImage] = useState<
    [string, File | undefined] | [undefined, undefined]
  >([defaultImage, undefined]);

  const [title, setTitle] = useState<string>(dataTitle || "");

  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const canSave =
    title &&
    imageSrc &&
    !isPending &&
    (title !== dataTitle || imageSrc !== defaultImage);

  useEffect(() => {
    // 
    if (!dataImage) return;
    if (dataImage === imageSrc) return;

    const imagePath = dataImage
      ? process.env.NEXT_PUBLIC_API_URL + `/${dataImage}`
      : undefined;
    setImage([imagePath, undefined]);
    // 
  }, [dataImage, imageSrc]);

  useEffect(() => {
    // 
    if (!dataTitle) return;
    if (dataTitle === title) return;

    setTitle(dataTitle);
    // 
  }, [dataTitle, title]);

  // INFO : check states
  debugger;
  //

  return (
    <Card className="w-full col-span-1 group/card relative">
      <CardContent className="h-60 pt-3">
        <div className="relative h-[90%] group/image flex justify-center items-center rounded-md ">
          {imageSrc && (
            <Image
              priority
              quality={100}
              src={imageSrc}
              fill
              className="object-contain rounded-lg"
              alt="jfksdla"
            />
          )}
          {!imageSrc && <SettingCardImageDropdown onDrop={onDropHandler} />}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-end gap-3">
        <Input
          className="text-2xl py-5 border-0 shadow-none"
          placeholder={`نام ${cardType}`}
          type="text"
          value={title}
          onChange={titleChangeHandler}
        />
        <div className="flex gap-2 justify-between items-center flex-wrap">
          {imageSrc && (
            <IconButton
              onClick={deleteImageHandler}
              size={"sm"}
              variant={"secondary"}
              className="bg-destructive/10 hover:bg-destructive/20"
              icon={faImage}
            >
              حذف تصویر
            </IconButton>
          )}
          {!isNew && (
            <IconButton
              size={"sm"}
              icon={faTrash}
              variant={"secondary"}
              isLoading={isPending}
              onClick={deleteHandler}
              className="bg-destructive/10 hover:bg-destructive/20"
            >
              حذف {isFromDB && cardType}
            </IconButton>
          )}
          <IconButton
            size={"sm"}
            disabled={!canSave}
            icon={!isFromDB ? faFloppyDisk : faPen}
            onClick={saveHandler}
            isLoading={isPending}
          >
            {!isFromDB && <span>ذخیره</span>}
            {isFromDB && <span>ویرایش</span>}
          </IconButton>
        </div>
      </CardFooter>
    </Card>
  );

  function onDropHandler(img: string, file: File | undefined) {
    setImage([img, file]);
  }

  function deleteImageHandler() {
    setImage([undefined, undefined]);
  }

  function titleChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setTitle(value);
  }

  function deleteHandler() {
    if (!id || !dataImage)
      return toast({
        title: `این ${cardType} هنوز ذخیره نشده است`,
        variant: "destructive",
      });
    isDeleting = true;

    startTransition(async () => {
      //
      const deleteDataResponse = await (cardType === "برند"
        ? deleteBrandAction(id)
        : deleteCategoryAction(id));
      //
      if (!deleteDataResponse.ok) {
        toast({
          title: `${cardType} با موفقیت حذف نشد ❌`,
          variant: "destructive",
          description: deleteDataResponse.message,
        });
      }
      //
      else
        toast({
          title: `${cardType} با موفقیت حذف شد ✅`,
        });

      isDeleting = false;

      return;
    });
  }

  function saveHandler() {
    if (isDeleting) return;

    if (!isFromDB) saveData();
    //
    else updateData();
  }

  async function updateData() {
    let formData: FormData | undefined = undefined;

    if (imageFile) {
      const _formData = new FormData();
      _formData.set("image", imageFile);
      formData = _formData;
    }

    startTransition(async () => {
      //
      const updateDataResponse = await (cardType === "برند"
        ? updateBrandAction(id as string, { title }, formData)
        : updateCategoryAction(id as string, { title }, formData));

      if (updateDataResponse.ok) {
        toast({
          title: `${cardType} با موفقیت ویرایش شد ✅`,
        });
        onSave?.call(null);
      } else {
        toast({
          title: `${cardType} با موفقیت ویرایش نشد ❌`,
          description: updateDataResponse.message,
        });
      }
    });
  }

  async function saveData() {
    //
    const formData = new FormData();
    formData.set("image", imageFile as Blob);

    startTransition(async () => {
      //
      const createDataResponse = await (cardType === "برند"
        ? createBrandAction({ title }, formData)
        : createCategoryAction({ title }, formData));

      if (createDataResponse.ok) {
        toast({
          title: `${cardType} با موفقیت ذخیره شد ✅`,
        });
        onSave?.call(null);
      }
      //
      else {
        toast({
          title: `${cardType} با موفقیت ذخیره نشد ❌`,
          description: createDataResponse.message,
        });
      }

      return;
    });
  }
}
