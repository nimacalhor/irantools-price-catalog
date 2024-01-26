"use client";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type SettingCardImageDropdownProps = {onDrop: (image:string) => void};

function SettingCardImageDropdown({onDrop:onDropProp}: SettingCardImageDropdownProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onloadend = () => onDropProp(reader.result as string);
  }, [onDropProp]);

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
            icon={faImage}
          />
          <p className="text-sm text-foreground font-light">
            {"تصویر را اینجا بکشید و رها کنید یا برای انتخاب تصویر کلیک کنید."}
          </p>
        </div>
      )}
    </div>
  );
}

export default SettingCardImageDropdown;
