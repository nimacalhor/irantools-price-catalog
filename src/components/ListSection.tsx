"use client";
import PrintComponent from "@/components/PrintComponent";
import { ComponentProps, useRef, useState } from "react";
import MainButtons from "../components/MainButtons";

type ListSectionProps = {
  tools?: ComponentProps<typeof PrintComponent>["tools"];
};

function ListSection({ tools }: ListSectionProps) {
  return (
    <>
      <MainButtons></MainButtons>
      <PrintComponent tools={tools} />
    </>
  );
}

export default ListSection;
