"use client";
import Image from "next/image";
import { Input } from "@/ui/input.ui";
import IconButton from "@/components/IconButton";
import { Brand, Category } from "@/types/setting.type";
import createBrand from "@/actions/createBrand.action";
import React, { useState, useTransition } from "react";
import { Card, CardContent, CardFooter } from "@/ui/card.ui";
import SettingCardImageDropdown from "./SettingCardImageDropdown";
import {
  faImage,
  faTrash,
  faFloppyDisk,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { useToast } from "@/hooks/useToast.hook";
import Spinner from "./Spinner";
import updateBrand from "@/actions/updateBrand.acion";
import deleteBrand from "@/actions/deleteBrand.action";
import { uniqueDateStr, whitespaceTo_ } from "@/utils/string.util";
import deleteCategory from "@/actions/deleteCategory.action";
import createCategory from "@/actions/createCategory.action";
import updateCategory from "@/actions/updateCategory.acion";

let isDeleting: boolean = false;

type SettingCardProps = {
  data: Brand | Category;
  cardType?: "برند" | "دسته بندی";
  onSave?: () => void;
};
export function SettingCard({
  data,
  cardType = "برند",
  onSave,
}: SettingCardProps) {
  const { isNew, title: dataTitle, image: dataImage, _id } = data;
  const isFromDB = !!_id;

  const defaultImage = dataImage
    ? process.env.NEXT_PUBLIC_IMAGE_SERVICE_API_URL + `/${dataImage}`
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
    if (!_id || !dataImage)
      return toast({
        title: `این ${cardType} هنوز ذخیره نشده است`,
        variant: "destructive",
      });
    isDeleting = true;

    const imageName = dataImage;
    const id = _id;

    startTransition(async () => {
      const { ok, message } = await (cardType === "برند"
        ? deleteBrand(id, imageName)
        : deleteCategory(id, imageName));
      if (!ok) {
        toast({
          title: `${cardType} با موفقیت حذف نشد ❌`,
          variant: "destructive",
          description: message,
        });
      } else
        toast({
          title: `${cardType} با موفقیت حذف شد ✅`,
        });
      isDeleting = false;

      return;
    });
  }

  function saveHandler() {
    if (isDeleting) return;

    const formData = new FormData();
    formData.append("title", title);

    const isNewImage = !!imageFile;
    if (isNewImage) {
      const fileExtension = imageFile.name.split(".").pop();
      formData.append(
        "imageName",
        whitespaceTo_(title) +
          `_${
            cardType === "برند" ? "brand" : "category"
          }_image_${uniqueDateStr()}.` +
          fileExtension
      );
      formData.append("image", imageFile);
      if (data.image) formData.append("oldImage", data.image);
    }

    if (!isFromDB) {
      startTransition(async () => {
        const { ok, message } = await (cardType === "برند"
          ? createBrand(formData)
          : createCategory(formData));

        if (ok) {
          toast({
            title: `${cardType} با موفقیت ذخیره شد ✅`,
          });
          onSave?.call(null);
        } else {
          toast({
            title: `${cardType} با موفقیت ذخیره نشد ❌`,
            description: message,
          });
        }
      });
    } else
      startTransition(async () => {
        const { ok, message } = await (cardType === "برند"
          ? updateBrand(_id, formData)
          : updateCategory(_id, formData));
        if (ok) {
          toast({
            title: `${cardType} با موفقیت ویرایش شد ✅`,
          });
          onSave?.call(null);
        } else {
          toast({
            title: `${cardType} با موفقیت ویرایش نشد ❌`,
            description: message,
          });
        }
      });
  }
}
