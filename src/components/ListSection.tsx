"use client";
import PrintComponent from "@/components/PrintComponent";
import { ComponentProps, useRef, useState } from "react";
import MainButtons from "../components/MainButtons";

type ListSectionProps = {
  tools?: ComponentProps<typeof PrintComponent>["tools"];
  pagination?: ComponentProps<typeof MainButtons>["pagination"];
};

function ListSection({ tools, pagination }: ListSectionProps) {
  return (
    <>
      <MainButtons pagination={pagination}></MainButtons>
      <PrintComponent tools={tools} />
    </>
  );
}

export default ListSection;
