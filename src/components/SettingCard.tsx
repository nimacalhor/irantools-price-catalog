"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/ui/card.ui";
import Image from "next/image";
import { Button } from "@/ui/button.ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faImage,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/ui/input.ui";
import IconButton from "@/components/IconButton";
import SettingCardImageDropdown from "./SettingCardImageDropdown";
import { Brand, Category } from "@/types/setting.type";

type SettingCardProps = {
  data: Brand | Category;
  cardType?: "برند" | "دسته بندی";
};
export function SettingCard({ data, cardType = "برند" }: SettingCardProps) {
  const { isNew, title: dataTitle, image: dataImage } = data;
  const [image, setImage] = useState<string | undefined>(dataImage);
  const [title, setTitle] = useState<string>(dataTitle || "");
  const canSave =
    title && image && (title !== dataTitle || image !== dataImage);

  return (
    <Card className="w-full col-span-1 group/card relative">
      <CardContent className="h-60 pt-3">
        <div className="relative h-[90%] group/image flex justify-center items-center rounded-md ">
          {image && (
            <Image
              priority
              quality={100}
              src={image}
              fill
              className="object-contain rounded-lg"
              alt="jfksdla"
            />
          )}
          {!image && <SettingCardImageDropdown onDrop={onDropHandler} />}
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
          {image && (
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
          <IconButton disabled={!canSave} size={"sm"} icon={faFloppyDisk}>
            ذخیره
          </IconButton>
        </div>
      </CardFooter>
    </Card>
  );

  function onDropHandler(img: string) {
    setImage(img);
  }

  function deleteImageHandler() {
    setImage(undefined);
  }

  function titleChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setTitle(value);
  }
}
