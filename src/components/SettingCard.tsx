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
} from "@fortawesome/free-solid-svg-icons";

type SettingCardProps = {
  data: Brand | Category;
  cardType?: "برند" | "دسته بندی";
};
export function SettingCard({ data, cardType = "برند" }: SettingCardProps) {
  const { isNew, title: dataTitle, image: dataImage } = data;

  const defaultImage = dataImage
    ? process.env.NEXT_PUBLIC_IMAGE_SERVICE_API_URL + `/${dataImage}`
    : undefined;

  const [[imageSrc, imageFile], setImage] = useState<
    [string, File | undefined] | [undefined, undefined]
  >([defaultImage, undefined]);

  const [title, setTitle] = useState<string>(dataTitle || "");

  const canSave =
    title && imageSrc && (title !== dataTitle || imageSrc !== dataImage);

  const [isPending, startTransition] = useTransition();

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
              variant={"secondary"}
              className="bg-destructive/10 hover:bg-destructive/20"
              icon={faTrash}
            >
              حذف {cardType}
            </IconButton>
          )}
          <IconButton
            onClick={saveHandler}
            disabled={!canSave}
            size={"sm"}
            icon={faFloppyDisk}
          >
            ذخیره
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

  function saveHandler() {
    const { _id } = data;
    const formData = new FormData();
    const fileExtension = imageFile?.name.split(".").pop();
    imageFile && formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("imageName", title + "_image." + fileExtension);
    debugger;

    if (!_id) {
      startTransition(async () => {
        const { ok, message } = await createBrand(formData);

      });
    }
  }
}
