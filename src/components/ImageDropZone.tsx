"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { useDropzone } from "react-dropzone";
import { MouseEventHandler, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Button } from "@/ui/button.ui";

type ImageDropZoneProps = {
  onImageAdd: (result: string | null) => void;
  image?: string | null;
  onImageDelete?: MouseEventHandler<HTMLButtonElement>;
};

export function ImageDropZone({
  onImageAdd, image, onImageDelete,
}: ImageDropZoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onloadend = () => onImageAdd(reader.result as string);
    },
    [onImageAdd]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", "jpeg"],
      "image/webp": [".webp"],
    },
  });

    if (image)
      return (
        <div className="border-border border rounded-md relative overflow-hidden hover:cursor-pointer group">
          <Image
            src={image}
            fill
            alt="tool creating image"
            objectFit="cover"
            className="" />
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-background/60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              onClick={onImageDelete}
              className="rounded-full h-20 w-20"
              variant={"destructive"}
              size={"icon"}
              type="submit"
            >
              <FontAwesomeIcon className="h-6 w-6" icon={faTrash} />
            </Button>
          </div>
        </div>
      );

  return (
    <div
      className="border-border border rounded-md hover:cursor-pointer transition-all hover:border-primary hover:shadow-sm group"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="h-full flex justify-center items-center bg-primary/50 animate-pulse rounded-md">
          <p className="text-sm text-foreground font-light">
            {"فایل را رها کنید"} ...
          </p>
        </div>
      ) : (
        <div className="p-4 flex justify-center items-center flex-col h-full gap-3">
          <FontAwesomeIcon
            className="h-20 w-20 text-foreground/30 transition-colors group-hover:text-primary/40"
            icon={faImage} />
          <p className="text-sm text-foreground font-light">
            {"تصویر را اینجا بکشید و رها کنید یا برای انتخاب تصویر کلیک کنید."}
          </p>
        </div>
      )}
    </div>
  );
}
