"use client";
import IconButton from "@/components/IconButton";
import { Button } from "@/ui/button.ui";
import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
import { faHome, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import PageError from "@/components/PageError";

type errorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

function error({ error, reset }: errorProps) {
  //  err log
  console.error("__________ error in error", { error });
  return (
    <>
      <PageError message={error.message} reset={reset}></PageError>
    </>
  );
}

export default error;
