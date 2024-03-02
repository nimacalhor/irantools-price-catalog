"use client"
import { faHome, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IconButton from "./IconButton";
import Link from "next/link";
import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";

function PageError({ message, reset }: { message: string; reset: () => void }) {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-5">
        <FontAwesomeIcon
          icon={faFaceFrownOpen}
          className="w-24 !h-24"
        />
        <h2 className="text-2xl">{message}</h2>
        <div className="flex justify-center items-center gap-2">
          <IconButton
            onClick={reset}
            variant={"secondary"}
            icon={faRotateRight}
          >
            تلاش مجدد
          </IconButton>
          <Link passHref href={"/"}>
            <IconButton icon={faHome}>خانه</IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageError;
