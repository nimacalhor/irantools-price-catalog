"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { useDropzone } from "react-dropzone";
import { MouseEventHandler, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Button } from "@/ui/button.ui";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "@/store/createTool.store";
import { addSubStrToStart } from "@/utils/string.util";

type ImageDropZoneProps = {};

export function ImageDropZone({}: ImageDropZoneProps) {
  const { image } = useSelector((state: RootState) => state.createTool.tool);
  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      dispatch(actions.setImageFile(acceptedFiles[0]));
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onloadend = () => {
        // INFO : image loaded
        debugger;
        //
        dispatch(actions.setTool({ image: reader.result as string }));
      };
    },
    [dispatch]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg"],
      "image/webp": [".webp"],
    },
  });

  const imagePath = !image
    ? ""
    : image.startsWith("data:")
    ? image
    : addSubStrToStart(process.env.NEXT_PUBLIC_API_URL + "/", image || "");
  //  temp log
  console.log("__________ imagePath in ImageDropZone", { imagePath });
  if (image && imagePath) {
    // INFO : check image and image path
    debugger;
    //
  }

  if (image && imagePath !== "")
    return (
      <div className="border-border border rounded-md relative overflow-hidden hover:cursor-pointer group h-60">
        <Image
          src={imagePath}
          fill
          alt="tool creating image"
          className="object-contain"
        />
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
      className="border-border border rounded-md h-60 hover:cursor-pointer transition-all hover:border-primary hover:shadow-sm group"
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
            icon={faImage}
          />
          <p className="text-sm text-foreground font-light">
            {"تصویر را اینجا بکشید و رها کنید یا برای انتخاب تصویر کلیک کنید."}
          </p>
        </div>
      )}
    </div>
  );

  function onImageDelete() {
    dispatch(actions.setTool({ image: undefined }));
  }
}
